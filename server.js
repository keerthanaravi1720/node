const express = require('express');
const app = express();
const port = 3440;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/home', (req, res) => {
    res.send('aka');
  });

  app.post('/post', (req, res) => {
    const name = req.body.name;
    const message = `Hello, ${name}!`;
    console.error("name",name)
    res.send(message);
  });
  
  

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


