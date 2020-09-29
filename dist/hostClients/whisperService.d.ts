/**
 * Style configuration for the whisper.
 *
 * @property backgroundColor - The background color of the Whisper card.
 * @property highlightColor - The color of important text in the Whisper card.
 * @property primaryColor - The color of normal text in the Whisper card.
 * @example
 * ```
 * {
 *   backgroundColor: '#fff',
 *   highlightColor: '#651fff',
 *   primaryColor: '#666',
 * }
 * ```
 */
export interface WhisperStyle {
    backgroundColor: string;
    highlightColor: string;
    primaryColor: string;
}
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
export interface WhisperService {
    /**
     * @returns - Promise resolving with the unique ID of the generated whisper.
     */
    emitWhisper(whisper: Whisper): Promise<Error | string>;
    updateWhisper(id: string, whisper: Whisper): Promise<Error | void>;
}
