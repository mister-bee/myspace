const { Client } = require('pg');

console.log('Starting database connection test...');

const client = new Client({
  connectionString: 'postgresql://myspaceinvaders_owner:tAnUWXFc0EC1@ep-lively-king-a56gdq78.us-east-2.aws.neon.tech/myspaceinvaders',
  ssl: false, // Disable SSL
  connectionTimeoutMillis: 5000, // 5 seconds timeout
});

client.connect()
  .then(() => {
    console.log('Connected to database');
  })
  .catch(err => {
    console.error('Connection error', err.stack);
  })
  .finally(() => {
    client.end();
    console.log('Client disconnected');
  });

  