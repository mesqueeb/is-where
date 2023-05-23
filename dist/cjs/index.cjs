'use strict';

function isNode() {
  return typeof process !== "undefined" && process.versions != null && process.versions.node != null;
}
function isBrowser() {
  return typeof window !== "undefined" && typeof window.document !== "undefined";
}
function isWebWorker() {
  return typeof self === "object" && self.constructor && self.constructor.name === "DedicatedWorkerGlobalScope";
}
function isJsDom() {
  return typeof window !== "undefined" && window.name === "nodejs" || typeof navigator !== "undefined" && (navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom"));
}
function isDeno() {
  return typeof Deno !== "undefined" && typeof Deno.core !== "undefined";
}
function isWebKit() {
  return isBrowser() && !!navigator.vendor && navigator.vendor.indexOf("Apple") !== -1 && !!navigator.userAgent;
}
function isSafari() {
  return isBrowser() && !!navigator.vendor && navigator.vendor.indexOf("Apple") !== -1 && !!navigator.userAgent && navigator.userAgent.indexOf("CriOS") == -1 && navigator.userAgent.indexOf("FxiOS") == -1;
}

exports.isBrowser = isBrowser;
exports.isDeno = isDeno;
exports.isJsDom = isJsDom;
exports.isNode = isNode;
exports.isSafari = isSafari;
exports.isWebKit = isWebKit;
exports.isWebWorker = isWebWorker;
