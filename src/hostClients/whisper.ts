import { WhisperStyle } from './whisperStyle';

/**
 *
 * @example
 * ```
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
 * ```
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
  /**
   * The title displayed at the top of the Whisper card.
   */
  label: string;
  /**
   * An object for specifying the styling of the Whisper card.
   */
  style?: WhisperStyle;
}
