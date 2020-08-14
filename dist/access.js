"use strict";
/** @module access */
Object.defineProperty(exports, "__esModule", { value: true });
exports.access = exports.PUBLIC = exports.ORGANIZATION = exports.USER = exports.UNKNOWN = void 0;
/** @constant {string} */
const UNKNOWN = 'unknown';
exports.UNKNOWN = UNKNOWN;
/** @constant {string} */
const USER = 'user';
exports.USER = USER;
/** @constant {string} */
const ORGANIZATION = 'organization';
exports.ORGANIZATION = ORGANIZATION;
/** @constant {string} */
const PUBLIC = 'public';
exports.PUBLIC = PUBLIC;
/** @constant {string[]} */
const access = [UNKNOWN, USER, ORGANIZATION, PUBLIC];
exports.access = access;
