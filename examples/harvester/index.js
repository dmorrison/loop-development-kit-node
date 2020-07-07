
const HarvesterPlugin = require('../../harvesterPlugin');
const Harvester = require('./harvester');

const impl = new Harvester();
const harvesterPlugin = new HarvesterPlugin(impl);
harvesterPlugin.serve();

