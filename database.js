const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('focusTimer');
const communityHours = db.collection('community');
const userCollection = db.collection('users');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function createUser(name, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    name: name,
    password: passwordHash,
    token: uuid.v4(),
  }
  console.log(user);
  await userCollection.insertOne(user);
  return user;
}

function getUserToken(token) {
  return userCollection.findOne({ token: token });
}

function getUserName(name) {
  return userCollection.findOne({ name: name });
}

async function addHours(info) {
  const result = await communityHours.updateOne({name:info.name, projectName:info.projectName}, {$inc: {time:+info.time}})
  if (result.modifiedCount == 0){
    await communityHours.insertOne(info);
  }
  return result;
}

function getHours() {
  const query = {};
  const options = {
    sort: { "_id": -1 },
  };
  const cursor = communityHours.find(query, options);
  return cursor.toArray();
}

module.exports = {addHours, getHours, getUserName, getUserToken, createUser};