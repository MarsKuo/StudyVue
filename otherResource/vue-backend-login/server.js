const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.port || 3000;

const { PORT = 8081, HOST = "localhost" } = process.env;
//app.listen(8090, () => console.log('app started'));
app.listen(PORT, () => console.log(`app started at http://${HOST}:${PORT}`));

const users = [{
  username: 'scars',
  password: '1234567',
  name: '姚偉揚',
}, {
  username: 'charlie',
  password: '7654321',
  name: '查理',
}];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => (
    u.username === username && u.password === password
  ));
  if (user) {
    res.json({
      success: true,
      name: user.name,
    });
  }
  else {
    res.json({
      success: false,
    });
  }
});

app.get('/exists/:username', (req, res) => {
  const { username } = req.params;
  const user = users.find(u => u.username === username);
  res.json({
    exists: user !== undefined,
  });
})
