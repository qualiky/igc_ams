"use strict";

/**
 * receipt service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::receipt.receipt", ({ strapi }) => ({
  async getReceiptsByDateRange(startDate, endDate) {
    return await strapi.entityService.findMany("api::receipt.receipt", {
      filters: {
        billedDate: {
          $gte: new Date(startDate),
          $lte: new Date(endDate),
        },
      },
      populate: ["receiptType"],
    });
  },
}));
