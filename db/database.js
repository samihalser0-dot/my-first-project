// Database management module
// Simple in-memory database for demonstration

const logger = require('../utils/logger');

class Database {
  constructor() {
    this.collections = {};
    this.logger = logger;
  }

  /**
   * Create a new collection
   * @param {string} name - Collection name
   */
  createCollection(name) {
    if (this.collections[name]) {
      this.logger.warn(`Collection "${name}" already exists`);
      return false;
    }
    this.collections[name] = [];
    this.logger.success(`Collection "${name}" created`);
    return true;
  }

  /**
   * Insert data into collection
   * @param {string} collection - Collection name
   * @param {object} data - Data to insert
   */
  insert(collection, data) {
    if (!this.collections[collection]) {
      this.logger.error(`Collection "${collection}" does not exist`);
      return null;
    }
    const id = Date.now();
    const record = { id, ...data, createdAt: new Date().toISOString() };
    this.collections[collection].push(record);
    return record;
  }

  /**
   * Find records in collection
   * @param {string} collection - Collection name
   * @param {object} query - Query object
   */
  find(collection, query = {}) {
    if (!this.collections[collection]) {
      return [];
    }
    return this.collections[collection].filter(record => {
      return Object.entries(query).every(([key, value]) => record[key] === value);
    });
  }

  /**
   * Find all records in collection
   * @param {string} collection - Collection name
   */
  findAll(collection) {
    return this.collections[collection] || [];
  }

  /**
   * Update record in collection
   * @param {string} collection - Collection name
   * @param {number} id - Record ID
   * @param {object} data - Updated data
   */
  update(collection, id, data) {
    const records = this.find(collection, { id });
    if (records.length === 0) {
      this.logger.error(`Record with ID ${id} not found`);
      return null;
    }
    Object.assign(records[0], data, { updatedAt: new Date().toISOString() });
    return records[0];
  }

  /**
   * Delete record from collection
   * @param {string} collection - Collection name
   * @param {number} id - Record ID
   */
  delete(collection, id) {
    const index = this.collections[collection]?.findIndex(r => r.id === id);
    if (index === -1 || index === undefined) {
      this.logger.error(`Record with ID ${id} not found`);
      return false;
    }
    this.collections[collection].splice(index, 1);
    return true;
  }

  /**
   * Get collection statistics
   * @param {string} collection - Collection name
   */
  stats(collection) {
    return {
      name: collection,
      count: this.collections[collection]?.length || 0,
      created: new Date().toISOString()
    };
  }
}

module.exports = new Database();
