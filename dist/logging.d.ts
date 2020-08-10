/** @module logging */
/** Logger is a supported way to get logs to Sidekick in the expected format. */
declare class Logger {
    private _name;
    private _fields;
    /**
     * Create a Logger.
     *
     * @param {string} name - The name of the plugin.
     * @param {object} fields - Additional fields to include with each log.
     * @example
     * const package = require('./package.json');
     * const logger = new Logger(package.name);
     */
    constructor(name: any, fields?: {});
    /**
     * with creates a new logger that will always have the key/value pairs.
     *
     * @param {...any} args - A list of alternating keys/values.
     * @returns {Logger} - A new logger with the provided fields.
     * @example
     * const logger2 = logger.with('persistentKey', 'persistentValue');
     * logger2.info('Yet another message', 'yetAnotherKey', 'yetAnotherValue');
     * // {
     * //   "@timestamp": "2020-07-30T14:58:21.057000Z",
     * //   "@pid": 1234,
     * //   "@level": "INFO",
     * //   "@module": "my-plugin-name",
     * //   "@message": "Yet another message",
     * //   "persistentKey": "persistentValue",
     * //   "yetAnotherKey": "yetAnotherValue"
     * // }
     */
    with(...args: any[]): Logger;
    /**
     * trace emits a message and key/value pairs at the TRACE level.
     *
     * @param {string} msg - The message of the log.
     * @param {...string} args - A list of alternating keys/values.
     * @returns {void}
     * @example
     * logger.trace('Some message');
     * // {
     * //   "@timestamp": "2020-07-30T14:58:21.057000Z",
     * //   "@pid": 1234,
     * //   "@level": "TRACE",
     * //   "@module": "my-plugin-name",
     * //   "@message": "Some message"
     * // }
     */
    trace(msg: any, ...args: any[]): void;
    /**
     * debug emits a message and key/value pairs at the DEBUG level.
     *
     * @param {string} msg - The message of the log.
     * @param {...string} args - A list of alternating keys/values.
     * @returns {void}
     * @example
     * logger.debug('Some message');
     * // {
     * //   "@timestamp": "2020-07-30T14:58:21.057000Z",
     * //   "@pid": 1234,
     * //   "@level": "DEBUG",
     * //   "@module": "my-plugin-name",
     * //   "@message": "Some message"
     * // }
     */
    debug(msg: any, ...args: any[]): void;
    /**
     * info emits a message and key/value pairs at the INFO level.
     *
     * @param {string} msg - The message of the log.
     * @param {...string} args - A list of alternating keys/values.
     * @returns {void}
     * @example
     * logger.info('Some message');
     * // {
     * //   "@timestamp": "2020-07-30T14:58:21.057000Z",
     * //   "@pid": 1234,
     * //   "@level": "INFO",
     * //   "@module": "my-plugin-name",
     * //   "@message": "Some message"
     * // }
     */
    info(msg: any, ...args: any[]): void;
    /**
     * warn emits a message and key/value pairs at the WARN level.
     *
     * @param {string} msg - The message of the log.
     * @param {...string} args - A list of alternating keys/values.
     * @returns {void}
     * @example
     * logger.warn('Some message');
     * // {
     * //   "@timestamp": "2020-07-30T14:58:21.057000Z",
     * //   "@pid": 1234,
     * //   "@level": "WARN",
     * //   "@module": "my-plugin-name",
     * //   "@message": "Some message"
     * // }
     */
    warn(msg: any, ...args: any[]): void;
    /**
     * error emits a message and key/value pairs at the ERROR level.
     *
     * @param {string} msg - The message of the log.
     * @param {...string} args - A list of alternating keys/values.
     * @returns {void}
     * @example
     * logger.error('Some message');
     * // {
     * //   "@timestamp": "2020-07-30T14:58:21.057000Z",
     * //   "@pid": 1234,
     * //   "@level": "ERROR",
     * //   "@module": "my-plugin-name",
     * //   "@message": "Some message"
     * // }
     */
    error(msg: any, ...args: any[]): void;
    /**
     * _write is the underlying implementation for writing a log message.
     *
     * @private
     * @param {string} lvl - The level of the log.
     * @param {string} msg - The message of the log.
     * @param {...string} args - A list of alternating keys/values.
     * @returns {void}
     */
    _write(lvl: any, msg: any, ...args: any[]): void;
    /**
     * _kvArgsWithFields converts a list of alternating keys/values to an object.
     *
     * @private
     * @param {...string} args - A list of alternating keys/values.
     * @returns {object} - An object created by combining the alternating keys/values.
     * @example
     * _kvArgsWithFields(['key1', 'value1', 'key2', 'value2', 'value3'])
     * // returns { 'key1': 'value1', 'key2': 'value2', 'EXTRA_VALUE_AT_END': 'value3' }
     */
    _kvArgsWithFields(args?: any[]): any;
    /**
     * _getTimestamp creates a timestamp in the supported format.
     *
     * @private
     * @returns {string} - A timestamp in a format compatible with the host process.
     */
    _getTimestamp(): string;
}
/**
 * prepareLogging overwrites basic console methods so they produce output in an expected format.
 * Also pushes all stdout to stderr.
 *
 * @private
 */
declare const prepareLogging: () => void;
export { Logger, prepareLogging };
