const express = require('express');
const app = express();
const DB = require('./database.js');

app.use(express.json())
app.use(express.static('public'))

app.listen(4000, function() {console.log("Server is running")})

let community = []
app.post('/timer', function (req, res) {
    let entry = {
        name: req.body.name,
        projectName: req.body.projectName,
        time: req.body.time
      };
      community.push(entry);
      console.log(community);
      res.send(community)
});

app.get('/timer', function(req, res){
    res.send(community)
});