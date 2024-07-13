module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  { name: "global::admin-redirect" },
  {
    name: "strapi::favicon",
    config: "./uploads/favicon_0dba5ffdf8.ico",
  },
  { resolve: "./src/middlewares/cmredirector" },
];
