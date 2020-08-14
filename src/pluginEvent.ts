/**
 * @typedef event
 * @type {object}
 * @property {object} data - The content of the event.
 * @example
 * {
 *   data: {
 *     text: "this is an example event with just a text field"
 *   },
 * }
 */
export interface PluginEvent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: { [index: string]: any };
}
