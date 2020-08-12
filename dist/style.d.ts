/**
 * @typedef style
 * @type {object}
 * @property {string} backgroundColor - The background color of the Whisper card.
 * @property {string} highlightColor - The color of important text in the Whisper card.
 * @property {string} primaryColor - The color of normal text in the Whisper card.
 * @example
 * {
 *   backgroundColor: '#fff',
 *   highlightColor: '#651fff',
 *   primaryColor: '#666',
 * }
 */
export interface style {
    backgroundColor: string;
    highlightColor: string;
    primaryColor: string;
}
