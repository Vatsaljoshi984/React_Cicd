module.exports = {
    apps: [
      {
        name: 'app-name',
        script: 'app.js', // your entry point file
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      }
    ]
  };
  