"use strict";

/**
 * home controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::home.home", ({ strapi }) => ({
  async homeNumbers(ctx) {
    try {
      const projects = await strapi.service("api::project.project").find();
      const receipts = await strapi.service("api::receipt.receipt").find();
      const clients = await strapi.service("api::client.client").find();
      const tickets = await strapi.service("api::ticket.ticket").find();
      const employee = await strapi.service("api::employee.employee").find();

      console.log(employee);

      let data = {
        projects: projects?.results?.length ?? 0,
        receipts: receipts?.results?.length ?? 0,
        clients: clients?.results?.length ?? 0,
        tickets: tickets.results?.length ?? 0,
        employee: employee?.results?.length ?? 0,
      };

      ctx.status = 200;
      ctx.send(data);
    } catch (error) {
      console.log(error);
      ctx.internalServerError("Internal Server Error");
    }
  },
}));
