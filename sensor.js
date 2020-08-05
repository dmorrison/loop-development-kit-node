const SensorGrpcHostClient = require('./sensorGrpcHostClient');

/**
 * @typedef Sensor
 * @type {object}
 * @property {Function} start - Executed when the host starts the plugin.
 * The plugin should not do anything before this is called.
 * @param {SensorGrpcHostClient} host
 * @property {Function} stop - Executed by the host to stop the plugin.
 * All plugin activity should stop when this is called.
 * @property {Function} onEvent - The host will send events to the plugin by calling this function.
 * @param {event} event
 */
