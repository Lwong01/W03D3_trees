const express = require('express');
const bodyParser = require('body-parser');

const creaks = [
  {
    id: 1,
    username: "Birch",
    content: "My bark is like paper. I hope they don't use it for that.",
  },
  {
    id: 2,
    username: "Spruce",
    content: "Don't cut me down for christmas. I have saplings.",
  },
  {
    id: 3,
    username: "Palm Tree",
    content: "My coconuts will hit you if you cut me down.",
  }
];

const names = ["Birch", "Spruce", "Palm Tree", "Arbutus", "Douglas", "Weeping Willow", "Cedar", "Maple", "Oak"];

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static('public'));

app.get('/creaks', (req, res) => {
  res.send(creaks);
});

app.post('/creaks', (req, res) => {
  const content = req.body.content;
  const creak = {
    id: Math.random(),
    username: names[Math.floor(names.length*Math.random())],
    content
  }
  creaks.push(creak);
  res.redirect('/');
});

app.listen(8888, () => console.log("😎"));