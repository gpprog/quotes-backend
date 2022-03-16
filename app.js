var express = require('express');
var app = express();
bp = require ('body-parser');
cors = require('cors');

const quotes = require ('./quotes.js');


app.use(cors());

app.use(bp.urlencoded({extended:false}));

app.get('/', (req,res)=>{



res.send('Hello everyone!'+quotes[index].q)

})


app.get( '/api/quote', (req,res)=>{

    let index = Math.floor( Math.random()*quotes.length);
    let quote = quotes[index].q;
    let author = quotes[index].a;

    res.json({
        "quote": quote,
        "author": author}
        )

})

app.listen( 3000, ()=>{
    console.log('Listening on port 3000')
})