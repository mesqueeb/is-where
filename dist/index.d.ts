/**
 * returns `true` if the current environment is Node
 */
declare function isNode(): boolean;
/**
 * returns `true` if the current environment is a browser
 */
declare function isBrowser(): boolean;
/**
 * returns `true` if the current environment is a Web Worker
 */
declare function isWebWorker(): boolean;
/**
 * returns `true` if the current environment is JS DOM
 */
declare function isJsDom(): boolean;
/**
 * returns `true` if the current environment is Deno
 */
declare function isDeno(): boolean;
/**
 * returns `true` if the current browser is based on WebKit
 *
 * This includes:
 * - Safari on macOS
 * - Safari on iOS & iPadOS
 * - Google Chrome on iOS & iPadOS
 * - Firefox on iOS & iPadOS
 * - ... on iOS & iPadOS
 *
 * All mobile browsers on iOS & iPadOS use WebKit
 */
declare function isWebKit(): boolean;
/**
 * returns `true` if the current browser is Safari
 *
 * This includes:
 * - Safari on macOS
 * - Safari on iOS & iPadOS
 *
 * It does not include other browser on iOS & iPadOS
 */
declare function isSafari(): boolean;

export { isBrowser, isDeno, isJsDom, isNode, isSafari, isWebKit, isWebWorker };
