/**
 * Returns `true` if the current environment supports touch events
 *
 * @see https://stackoverflow.com/a/63666289/2697506
 */
export declare function isTouchSupported(): boolean;
/** Returns `true` if the current environment is Node */
export declare function isNode(): boolean;
/** Returns `true` if the current environment is a browser */
export declare function isBrowser(): boolean;
/** Returns `true` if the current environment is a Web Worker */
export declare function isWebWorker(): boolean;
/** Returns `true` if the current environment is JS DOM */
export declare function isJsDom(): boolean;
/** Returns `true` if the current environment is Deno */
export declare function isDeno(): boolean;
/**
 * Returns `true` if the current browser is based on WebKit
 *
 * This includes:
 *
 * - Safari on macOS
 * - Safari on iOS & iPadOS
 * - Google Chrome on iOS & iPadOS
 * - Firefox on iOS & iPadOS
 * - ... on iOS & iPadOS
 *
 * All mobile browsers on iOS & iPadOS use WebKit
 */
export declare function isWebKit(): boolean;
/**
 * Returns `true` if the current browser is Safari
 *
 * This includes:
 *
 * - Safari on macOS
 * - Safari on iOS & iPadOS
 *
 * It does not include other browser on iOS & iPadOS
 */
export declare function isSafari(): boolean;
