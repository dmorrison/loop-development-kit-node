const { TextDecoder } = require('util');
const { StdioData } = require('./proto/stdio_pb');
const { GRPCStdioService } = require('./proto/stdio_grpc_pb');

class StdioGrpcServer {
  constructor(server) {
    server.addService(GRPCStdioService, {
      streamStdio: this.streamStdio(),
    });
  }

  streamStdio() {
    return (call) => {
      const oldStdoutWrite = process.stdout.write.bind(process.stdout);
      const oldStderrWrite = process.stderr.write.bind(process.stderr);

      process.stdout.write = (val, encoding, cb) => {
        if (val == null) {
          oldStdoutWrite(process.stdout, val, encoding, cb);
          return;
        }

        let str;
        if (val.constructor.name === 'Uint8Array') {
          let enc = encoding;
          if (enc == null || typeof enc !== 'string' || !enc) {
            enc = 'utf8';
          }
          str = new TextDecoder(enc).decode(val);
        } else if (typeof val === 'string') {
          str = val;
        } else {
          oldStdoutWrite(process.stdout, val, encoding, cb);
          return;
        }

        const message = new StdioData();
        message.setData(str);
        message.setChannel(StdioData.Channel.STDOUT);

        call.write(message);
        oldStdoutWrite(process.stdout, val, encoding, cb);
      };

      process.stderr.write = (val, encoding, cb) => {
        if (val == null) {
          oldStderrWrite(process.stderr, val, encoding, cb);
          return;
        }

        let str;
        if (val.constructor.name === 'Uint8Array') {
          let enc = encoding;
          if (enc == null || typeof enc !== 'string' || !enc) {
            enc = 'utf8';
          }
          str = new TextDecoder(enc).decode(val);
        } else if (typeof val === 'string') {
          str = val;
        } else {
          oldStderrWrite(process.stderr, val, encoding, cb);
          return;
        }

        // eslint-disable-next-line no-control-regex
        str = str.replace(/\u001b\[.*?m/g, '');

        const message = new StdioData();
        message.setData(str);
        message.setChannel(StdioData.Channel.STDERR);

        call.write(message);
        oldStderrWrite(process.stderr, val, encoding, cb);
      };
    };
  }
}

module.exports = StdioGrpcServer;
