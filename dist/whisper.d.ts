import { style } from './style';
/**
 * @typedef whisper
 * @type {object}
 * @property {string} markdown - The content of the Whisper in markdown.
 * @property {style} style - An object for specifying the styling of the Whisper card.
 * @property {string} label - The title displayed at the top of the Whisper card.
 * @property {string} icon - An icon displayed at the top of the Whisper card.
 * @example
 * {
 *   markdown: '# Markdown\nThis is markdown',
 *   label: 'Whisper!',
 *   icon: 'bathtub',
 *   style: {
 *     backgroundColor: '#fff',
 *     highlightColor: '#651fff',
 *     primaryColor: '#666',
 *   },
 * }
 */
export interface Whisper {
    markdown: string;
    icon: string;
    label: string;
    style: style;
}
