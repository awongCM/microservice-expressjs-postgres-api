export default configs = {
  development: {
    uri:
      process.env?.DEV_DB_URI ??
      "postgres://postgres:password@localhost:5432/dev_service_auth",
    logging: true,
  },
  test: {
    uri: process.env?.TEST_DB_URI ?? "sqlite::memory:",
    logging: false,
  },
  production: {
    uri:
      process.env?.PROD_DB_URI ??
      "postgres://postgres:password@localhost:5432/service_auth",
    logging: false,
  },
};
