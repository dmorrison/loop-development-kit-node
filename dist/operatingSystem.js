"use strict";
/** @module operatingSystem */
Object.defineProperty(exports, "__esModule", { value: true });
exports.operatingSystems = exports.ANY = exports.LINUX = exports.MACOS = exports.WINDOWS = exports.UNKNOWN = void 0;
/** @constant {string} */
const UNKNOWN = 'unknown';
exports.UNKNOWN = UNKNOWN;
/** @constant {string} */
const WINDOWS = 'win32';
exports.WINDOWS = WINDOWS;
/** @constant {string} */
const MACOS = 'darwin';
exports.MACOS = MACOS;
/** @constant {string} */
const LINUX = 'linux';
exports.LINUX = LINUX;
/** @constant {string} */
const ANY = 'any';
exports.ANY = ANY;
/** @constant {string[]} */
const operatingSystems = [UNKNOWN, WINDOWS, MACOS, LINUX, ANY];
exports.operatingSystems = operatingSystems;
