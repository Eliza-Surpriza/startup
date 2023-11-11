const express = require('express');
const app = express();
app.use(express.json)
app.use(express.static('public'))
app.listen(4000, function() {console.log("Server is running")})
let community = []
app.post('/timer', function (req, res) {
    let entry = {
        name: req.body.name,
        project: req.body.projectName,
        time: req.body.number
      };
      community.push(entry);
      console.log(community);
});
