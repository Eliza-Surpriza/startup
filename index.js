const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');


app.use(express.json())
app.use(cookieParser());
app.set('trust proxy', true);
app.use(express.static('public'))


app.listen(4000, function() {console.log("Server is running")})

var secureApiRouter = express.Router();
app.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies['token'];
  const user = await DB.getUserToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});
// Use the cookie parser middleware

app.post('/auth/create', async (req, res) => {
  if (await DB.getUserName(req.body.name)) {
    console.log('existing user')
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.name, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
    console.log(user);
  }
});

function setAuthCookie(res, authToken) {
  console.log('this is the authToken');
  console.log(authToken);
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.post('/auth/login', async (req, res) => {
  const user = await DB.getUserName(req.body.name);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      console.log(user);
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

secureApiRouter.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await DB.getUserToken(authToken);
  if (user) {
    res.send(user);
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});


secureApiRouter.post('/timer', async (req, res) => {
    let entry = {
        name: req.body.name,
        projectName: req.body.projectName,
        time: req.body.time
      };
    await DB.addHours(entry);
    const hours = await DB.getHours();
    res.send(hours);
  });

  secureApiRouter.get('/timer', async (_req, res) => {
    const hours = await DB.getHours();
    res.send(hours);
});

peerProxy(httpService);
