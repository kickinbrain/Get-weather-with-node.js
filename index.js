const express = require('express');
const bodyParsor = require('body-parser');
const weatherRequest = require('./requests/weather.requests');

const app = express();

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParsor.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.render('index',{weather: null, error:null});
});

app.post('/', async (req,res) => {
    const {city} = req.body;
    const {weather, error} = await weatherRequest(city);
    res.render('index',{weather,error});
});

app.listen(3000, () => {
   console.log('Server has started on port  3000....');
});