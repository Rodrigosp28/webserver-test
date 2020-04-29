const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//helpers

 
app.get('/', (req, res) => {

  
  res.render('home',{
    nombre: 'Rodrigo'
  });
  // res.send('Hello World')
});

app.get('/about', (req, res) => {

  
  res.render('about',{
    nombre: 'Rodrigo'
  });
  // res.send('Hello World')
});
 
app.listen(port,() => {
  console.log(`escuchando peticiones en el puerto ${port}`);
})