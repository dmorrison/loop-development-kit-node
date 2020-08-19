import { WhisperStyle } from './whisperStyle';

/**
 *
 * @property {style} style - An object for specifying the styling of the Whisper card.
 * @property {string} label - The title displayed at the top of the Whisper card.
 * @property {string} icon -
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
  /**
   * The content of the Whisper in markdown.
   */
  markdown: string;
  /**
   * The icon displayed at the top of the Whisper card.
   */
  icon: string;
  label: string;
  style: WhisperStyle;
}
