/**
 * Returns `true` if the current environment supports touch events
 *
 * @see https://stackoverflow.com/a/63666289/2697506
 */
export function isTouchSupported(): boolean {
  return isBrowser() && window.matchMedia('(hover: none)').matches
}

/** Returns `true` if the current environment is Node */
export function isNode(): boolean {
  return typeof process !== 'undefined' && process.versions != null && process.versions.node != null
}

/** Returns `true` if the current environment is a browser */
export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof window.document !== 'undefined'
}

/** Returns `true` if the current environment is a Web Worker */
export function isWebWorker(): boolean {
  return (
    typeof self === 'object' &&
    self.constructor &&
    self.constructor.name === 'DedicatedWorkerGlobalScope'
  )
}

/** Returns `true` if the current environment is JS DOM */
export function isJsDom(): boolean {
  // Node 21+ ships a global `navigator` whose userAgent contains "Node.js", so `window` must exist too
  if (typeof window === 'undefined') return false
  return (
    window.name === 'nodejs' ||
    (typeof navigator !== 'undefined' &&
      (navigator.userAgent.includes('Node.js') || navigator.userAgent.includes('jsdom')))
  )
}

/** Returns `true` if the current environment is Deno */
export function isDeno(): boolean {
  // @ts-expect-error Deno types not found
  return typeof Deno !== 'undefined' && typeof Deno.core !== 'undefined'
}

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
export function isWebKit(): boolean {
  return (
    isBrowser() &&
    !!navigator.vendor &&
    navigator.vendor.indexOf('Apple') !== -1 &&
    !!navigator.userAgent
  )
}

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
export function isSafari(): boolean {
  return (
    isBrowser() &&
    !!navigator.vendor &&
    navigator.vendor.indexOf('Apple') !== -1 &&
    !!navigator.userAgent &&
    navigator.userAgent.indexOf('CriOS') == -1 &&
    navigator.userAgent.indexOf('FxiOS') == -1
  )
}
