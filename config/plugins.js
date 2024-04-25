module.exports = {
    documentation: {
        enabled: true,
        config: {
          openapi: '3.0.0',
          info: {
            version: '1.0.0',
            title: 'PIRUS DOCUMENTATION',
            description: '',
            contact: {
              name: 'Sandeep Gautam',
              email: 'sandeep@infinitydevelopmententerprise.com',
              url: 'infinitydevelopmententerprise.com'
            },
            license: {
              name: 'Apache 2.0',
              url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
            },
          },
          'x-strapi-config': {
            // Leave empty to ignore plugins during generation
            plugins: [ 'upload', 'users-permissions'],
            path: '/documentation',
          },
          servers: [{ url: 'http://admin.pirus.app/api', description: 'Development server' }],
          externalDocs: {
            description: 'Find out more',
            url: 'https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html'
          },
          security: [ { bearerAuth: [] } ]
        }
      }
};
