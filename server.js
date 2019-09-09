const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      id: 1,
      image: 'https://source.unsplash.com/random/100x64',
      name: 'MK',
      gender: 'Male',
      job: 'Dev'
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/random/100x64',
      name: 'Kim',
      gender: 'Male',
      job: 'Jr.Dev'
    },
    {
      id: 3,
      image: 'https://source.unsplash.com/random/100x64',
      name: 'Hash',
      gender: 'Female',
      job: 'None'
    }
  ])
})

app.listen(port, () => console.log(`listening on port ${port}`));
