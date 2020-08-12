"use strict";
/** @module categories */
Object.defineProperty(exports, "__esModule", { value: true });
exports.categories = exports.UNKNOWN = exports.SIDEKICK = exports.SENSOR = exports.INTELLIGENCE = exports.CONTROLLER = void 0;
/** @constant {string} */
const CONTROLLER = 'Controller';
exports.CONTROLLER = CONTROLLER;
/** @constant {string} */
const INTELLIGENCE = 'Intelligence';
exports.INTELLIGENCE = INTELLIGENCE;
/** @constant {string} */
const SENSOR = 'Sensor';
exports.SENSOR = SENSOR;
/** @constant {string} */
const SIDEKICK = 'Sidekick';
exports.SIDEKICK = SIDEKICK;
/** @constant {string} */
const UNKNOWN = 'Unknown';
exports.UNKNOWN = UNKNOWN;
/** @constant {string[]} */
const categories = [UNKNOWN, INTELLIGENCE, CONTROLLER, SENSOR, SIDEKICK];
exports.categories = categories;
