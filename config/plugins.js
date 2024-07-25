module.exports = {
  'strapi-neon-tech-db-branches': {
    enabled: true,
    config: {
      neonApiKey: "n074tjcw788iijm98t6y32mf6o5fmpioov4qlcf9wqpor5p2wya1ojkea9h7zwkz", // get it from here: https://console.neon.tech/app/settings/api-keys
      neonProjectName: "ecommerce-Dxn", // the neon project under wich your DB runs
      neonRole: "neondb_owner", // create it manually under roles for your project first
      gitBranch: "main" // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
    }
  },
}
