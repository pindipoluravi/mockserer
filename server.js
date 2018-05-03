var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');


  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


app.post('/tasks', (req, res) => {
  console.info(req.body);
  res.json({"message": "okay"});
});

app.get('/', (req, res) => {
  console.info(req.body);
  res.json({"message": "I am running"});
});


app.listen(port);


console.log('RESTful API server started on: ' + port);
