const fs = require('fs');
const path = require('path');

// load files that need edited
const protoDir = path.join(__dirname, '../src/proto');
const brokerGrpcPbPath = path.join(protoDir, 'broker_grpc_pb.js');
const brokerGrpcTsPath = path.join(protoDir, 'broker_grpc_pb.d.ts');
const healthGrpcPbPath = path.join(protoDir, 'health_grpc_pb.js');
const healthGrpcTsPath = path.join(protoDir, 'health_grpc_pb.d.ts');
const ldkGrpcPbPath = path.join(protoDir, 'ldk_grpc_pb.js');
const ldkGrpcTsPath = path.join(protoDir, 'ldk_grpc_pb.d.ts');
const stdioGrpcPbPath = path.join(protoDir, 'stdio_grpc_pb.js');
const stdioGrpcTsPath = path.join(protoDir, 'stdio_grpc_pb.d.ts');
let brokerGrpcPb = fs.readFileSync(brokerGrpcPbPath, 'utf-8');
let healthGrpcPb = fs.readFileSync(healthGrpcPbPath, 'utf-8');
let ldkGrpcPb = fs.readFileSync(ldkGrpcPbPath, 'utf-8');
let stdioGrpcPb = fs.readFileSync(stdioGrpcPbPath, 'utf-8');
let brokerGrpcTs = fs.readFileSync(brokerGrpcTsPath, 'utf-8');
let healthGrpcTs = fs.readFileSync(healthGrpcTsPath, 'utf-8');
let ldkGrpcTs = fs.readFileSync(ldkGrpcTsPath, 'utf-8');
let stdioGrpcTs = fs.readFileSync(stdioGrpcTsPath, 'utf-8');

// The proto compiler uses the only grpc moduled "grpc".
// We need to use the new module "@grpc/grpc-js" which supports sockets.
const searchJsValue = "var grpc = require('grpc');";
const replaceJsValue = "var grpc = require('@grpc/grpc-js');";
brokerGrpcPb = brokerGrpcPb.replace(searchJsValue, replaceJsValue);
healthGrpcPb = healthGrpcPb.replace(searchJsValue, replaceJsValue);
ldkGrpcPb = ldkGrpcPb.replace(searchJsValue, replaceJsValue);
stdioGrpcPb = stdioGrpcPb.replace(searchJsValue, replaceJsValue);

// .d.ts files also need to reference grpc/grpc-js instead of grpc.
const searchTsValue = 'import * as grpc from "grpc";';
const replaceTsValue = 'import * as grpc from "@grpc/grpc-js";';
brokerGrpcTs = brokerGrpcTs.replace(searchTsValue, replaceTsValue);
healthGrpcTs = healthGrpcTs.replace(searchTsValue, replaceTsValue);
ldkGrpcTs = ldkGrpcTs.replace(searchTsValue, replaceTsValue);
stdioGrpcTs = stdioGrpcTs.replace(searchTsValue, replaceTsValue);

// There is an issue with the "@grpc/grpc-js" module when you require it multiple times.
// So, we need to export it from "ldk_grpc_pb.js" so that it can be used to create credentials.
if (!ldkGrpcPb.includes('exports.grpc = grpc;')) {
  ldkGrpcPb += '\nexports.grpc = grpc;\n';
}

// grpc is exported by generated files, but .d.ts does not include it by default
if (!ldkGrpcTs.includes('export { grpc }')) {
  ldkGrpcTs += '\nexport { grpc }\n';
}

// update files on disk
fs.writeFileSync(brokerGrpcPbPath, brokerGrpcPb);
fs.writeFileSync(healthGrpcPbPath, healthGrpcPb);
fs.writeFileSync(ldkGrpcPbPath, ldkGrpcPb);
fs.writeFileSync(stdioGrpcPbPath, stdioGrpcPb);
fs.writeFileSync(brokerGrpcTsPath, brokerGrpcTs);
fs.writeFileSync(healthGrpcTsPath, healthGrpcTs);
fs.writeFileSync(ldkGrpcTsPath, ldkGrpcTs);
fs.writeFileSync(stdioGrpcTsPath, stdioGrpcTs);
