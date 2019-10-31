var config = {
  user: 'sa',
  password: '123$%^A',
  server: '192.168.1.198',
  database: 'ZL_CWKLDGE',
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