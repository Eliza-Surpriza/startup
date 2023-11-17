const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('focusTimer');
const communityHours = db.collection('community')

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addHours(info) {
  const result = await communityHours.insertOne(info);
  deleteOld()
  return result;
}

function getHours() {
  const query = {};
  const options = {
    sort: { "_id": -1 },
    limit: 10,
  };
  const cursor = communityHours.find(query, options);
  return cursor.toArray();
}

async function deleteOld() {
  const query = {};
  const options = {
    sort: { "_id": -1 },
    limit: 10,
  };
  const newest = await communityHours.find(query, options).toArray();
  const ids = newest.map(entry => entry._id)
  await communityHours.deleteMany({_id: {$nin: ids}});
}

module.exports = {addHours, getHours};