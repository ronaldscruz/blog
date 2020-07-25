require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

module.exports = () => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: process.env.DATABASE_HOST || "127.0.0.1",
        port: process.env.DATABASE_PORT || 3306,
        database: process.env.DATABASE_NAME || "db_rscruz_cms",
        username: process.env.DATABASE_USERNAME || "root",
        password: process.env.DATABASE_PASSWORD || "example",
        ssl: process.env.DATABASE_SSL === "true",
      },
      options: {},
    },
  },
});
