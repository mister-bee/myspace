const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://myspaceinvaders_owner:tAnUWXFc0EC1@ep-lively-king-a56gdq78.us-east-2.aws.neon.tech/myspaceinvaders?sslmode=require',
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect()
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Connection error', err.stack))
  .finally(() => client.end());
