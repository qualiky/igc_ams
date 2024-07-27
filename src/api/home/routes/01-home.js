module.exports = {
  routes: [
    {
      method: "GET",
      path: "/home/data",
      handler: "home.homeNumbers",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
