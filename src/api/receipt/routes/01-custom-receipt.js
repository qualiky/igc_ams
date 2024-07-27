module.exports = {
  routes: [
    {
      method: "GET",
      path: "/receipts/date/analytics",
      handler: "receipt.analytics",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
