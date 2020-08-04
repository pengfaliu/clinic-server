var config = {
  user: 'sa',
  password: '123$%^A',
  server: '192.168.1.198',
  // port: 55616,
  // database: 'ZL_CWKLDGE',
  database: 'ODR_DB',
  options: {
    encrypt: true
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
};

module.exports = config