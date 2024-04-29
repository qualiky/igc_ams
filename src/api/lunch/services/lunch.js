'use strict';

/**
 * lunch service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lunch.lunch');
