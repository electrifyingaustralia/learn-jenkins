module.exports = {
  apps: [
    {
      name: "node-app",
      script: "npm",
      args: "start",
      cwd: "/var/www/html",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
