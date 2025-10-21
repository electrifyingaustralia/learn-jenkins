module.exports = {
  apps: [
    {
      name: "electrifying-australia",
      script: "npm",
      args: "start",
      cwd: "/var/www/html",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
