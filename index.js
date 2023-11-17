const express = require('express');
const app = express();
const DB = require('./database.js');

app.use(express.json())
app.use(express.static('public'))

app.listen(4000, function() {console.log("Server is running")})

app.post('/timer', async (req, res) => {
    let entry = {
        name: req.body.name,
        projectName: req.body.projectName,
        time: req.body.time
      };
    await DB.addHours(entry);
    const hours = await DB.getHours();
    res.send(hours);
  });

app.get('/timer', async (_req, res) => {
    const hours = await DB.getHours();
    res.send(hours);
});