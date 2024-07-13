"use strict";

/**
 * `cmredirector` middleware
 */

module.exports = (config, { strapi }) => {
  const redirects = ["/", "/index.html", "/admin", "/admin/"].map((path) => ({
    method: "GET",
    path,
    handler: (ctx) => ctx.redirect("/admin/content-manager"),
    config: { auth: false },
  }));

  strapi.server.routes(redirects);
};
