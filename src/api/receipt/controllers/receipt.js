"use strict";

/**
 * receipt controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::receipt.receipt", ({ strapi }) => ({
  async analytics(ctx) {
    try {
      const { startDate, endDate } = ctx.query;

      if (!startDate || !endDate) {
        return ctx.badRequest("Please provide both startDate and endDate");
      }

      const receipts = await strapi.service("api::receipt.receipt").find({
        populate: ["receiptType"],
      });

      console.log(`Receipts object: ${JSON.stringify(receipts)}`);

      // Initialize data structure for the response
      const data = {
        date: [],
        income: [],
        expenses: [],
      };

      // Helper function to format month and year
      const formatMonthYear = (date) => {
        const options = { year: "numeric", month: "short" };
        return new Date(date).toLocaleDateString("en-US", options);
      };

      // Aggregate data
      const aggregatedData = receipts.results?.reduce((acc, receipt) => {
        const monthYear = formatMonthYear(receipt.billedDate);

        if (!acc[monthYear]) {
          acc[monthYear] = { income: 0, expenses: 0 };
        }

        if (receipt.receiptType === "Income") {
          acc[monthYear].income += Number(receipt.amount);
        } else if (receipt.receiptType === "Expenditure") {
          acc[monthYear].expenses += Number(receipt.amount);
        }

        return acc;
      }, {});

      // Populate the response data
      for (const [monthYear, values] of Object.entries(aggregatedData)) {
        data.date.push(monthYear);
        data.income.push(values.income);
        data.expenses.push(values.expenses);
      }

      ctx.send(data);
    } catch (error) {
      console.log(error);
      ctx.internalServerError("Internal Server Error");
    }
  },
}));
