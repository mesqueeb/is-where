'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * returns `true` if the current environment is Node
 */
function isNode() {
    return typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
}
/**
 * returns `true` if the current environment is a browser
 */
function isBrowser() {
    return typeof window !== 'undefined' && typeof window.document !== 'undefined';
}
/**
 * returns `true` if the current environment is a Web Worker
 */
function isWebWorker() {
    return (typeof self === 'object' &&
        self.constructor &&
        self.constructor.name === 'DedicatedWorkerGlobalScope');
}
/**
 * returns `true` if the current environment is JS DOM
 */
function isJsDom() {
    return ((typeof window !== 'undefined' && window.name === 'nodejs') ||
        (typeof navigator !== 'undefined' &&
            (navigator.userAgent.includes('Node.js') || navigator.userAgent.includes('jsdom'))));
}
/**
 * returns `true` if the current environment is Deno
 */
function isDeno() {
    // @ts-ignore
    return typeof Deno !== 'undefined' && typeof Deno.core !== 'undefined';
}
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
function isWebKit() {
    return (isBrowser() &&
        !!navigator.vendor &&
        navigator.vendor.indexOf('Apple') !== -1 &&
        !!navigator.userAgent);
}
/**
 * returns `true` if the current browser is Safari
 *
 * This includes:
 * - Safari on macOS
 * - Safari on iOS & iPadOS
 *
 * It does not include other browser on iOS & iPadOS
 */
function isSafari() {
    return (isBrowser() &&
        !!navigator.vendor &&
        navigator.vendor.indexOf('Apple') !== -1 &&
        !!navigator.userAgent &&
        navigator.userAgent.indexOf('CriOS') == -1 &&
        navigator.userAgent.indexOf('FxiOS') == -1);
}

exports.isBrowser = isBrowser;
exports.isDeno = isDeno;
exports.isJsDom = isJsDom;
exports.isNode = isNode;
exports.isSafari = isSafari;
exports.isWebKit = isWebKit;
exports.isWebWorker = isWebWorker;
