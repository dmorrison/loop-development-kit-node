const messages = require('./proto/ldk_pb');
const services = require('./proto/ldk_grpc_pb');

class ControllerGrpcHostClient {
  connect(connInfo) {
    return new Promise((resolve, reject) => {
      let address;
      if (connInfo.network === 'unix') {
        address = `unix://${connInfo.address}`;
      } else {
        address = connInfo.address;
      }

      this.client = new services.ControllerHostClient(
        address,
        services.grpc.credentials.createInsecure()
      );

      // set a 5 second deadline
      const deadline = new Date();
      deadline.setSeconds(deadline.getSeconds() + 5);

      this.client.waitForReady(deadline, (err, value) => {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      });
    });
  }

  emitWhisper(whisper) {
    return new Promise((resolve, reject) => {
      const request = new messages.EmitWhisperRequest();

      const style = new messages.Style();
      style.setBackgroundcolor(whisper.style.backgroundColor);
      style.setPrimarycolor(whisper.style.primaryColor);
      style.setHighlightcolor(whisper.style.highlightColor);

      const whisperMsg = new messages.Whisper();
      whisperMsg.setMarkdown(whisper.markdown);
      whisperMsg.setLabel(whisper.label);
      whisperMsg.setStyle(style);
      whisperMsg.setIcon(whisper.icon);

      request.setWhisper(whisperMsg);

      this.client.emitWhisper(request, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response);
      });
    });
  }
}

module.exports = ControllerGrpcHostClient;
