var config = {
  MONGO_URL: process.env.MONGOHQ_URL || 'mongodb://127.0.0.1:27017',
  PORT: process.env.PORT || 5000
}

module.exports = config;
