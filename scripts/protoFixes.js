const fs = require('fs');
const path = require('path');

// load files that need edited
const brokerGrpcPbPath = path.join(__dirname, '../proto/broker_grpc_pb.js');
const ldkGrpcPbPath = path.join(__dirname, '../proto/ldk_grpc_pb.js');
const stdioGrpcPbPath = path.join(__dirname, '../proto/stdio_grpc_pb.js');
let brokerGrpcPb = fs.readFileSync(brokerGrpcPbPath, 'utf-8');
let ldkGrpcPb = fs.readFileSync(ldkGrpcPbPath, 'utf-8');
let stdioGrpcPb = fs.readFileSync(stdioGrpcPbPath, 'utf-8');

// The proto compiler uses the only grpc moduled "grpc".
// We need to use the new module "@grpc/grpc-js" which supports sockets.
brokerGrpcPb = brokerGrpcPb.replace('var grpc = require(\'grpc\');', 'var grpc = require(\'@grpc/grpc-js\');');
ldkGrpcPb = ldkGrpcPb.replace('var grpc = require(\'grpc\');', 'var grpc = require(\'@grpc/grpc-js\');');
stdioGrpcPb = stdioGrpcPb.replace('var grpc = require(\'grpc\');', 'var grpc = require(\'@grpc/grpc-js\');');

// There is an issue with the "@grpc/grpc-js" module when you require it multiple times.
// So, we need to export it from "ldk_grpc_pb.js" so that it can be used to create credentials.
if (!ldkGrpcPb.includes('exports.grpc = grpc;')) {
  ldkGrpcPb += '\nexports.grpc = grpc;\n';
}

// update files on disk
fs.writeFileSync(brokerGrpcPbPath, brokerGrpcPb);
fs.writeFileSync(ldkGrpcPbPath, ldkGrpcPb);
fs.writeFileSync(stdioGrpcPbPath, stdioGrpcPb);
