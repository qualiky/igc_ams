module.exports = {
    apps: [
      {
        name: 'strapi-app-pirus',
        cwd: '/var/www/admin.pirus.app/igc_ams', // must have absolute path
        script: 'npx',
        args: 'strapi develop',
        env: {
          NODE_ENV: 'development',
        },
      },
    ],
  };