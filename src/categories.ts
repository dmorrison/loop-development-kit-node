/** @module categories */

export enum Category {
  CONTROLLER = 'controller',
  INTELLIGENCE = 'Intelligence',
  SENSOR = 'Sensor',
  SIDEKICK = 'Sidekick',
  UNKNOWN = 'Unknown',
}

/** @constant {string[]} */
export const categories = [Category.UNKNOWN, Category.INTELLIGENCE, Category.CONTROLLER, Category.SENSOR, Category.SIDEKICK];

export default Category;
