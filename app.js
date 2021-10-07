// Imports
const express = require('express')
const app = express()
const port = 3009
const fetch =require("node-fetch")
const API_KEY = 
// const weatherRoute = require('./routes/weather');
// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')
app.get('', (req, res) => {
    res.render('index', { text: 'This is EJS'})
})
// app.use('/', weatherRoute);

app.get('/title/:name', async (req, res) => {

 res.statusCode = 200;
    // res.end(`https://api.aniapi.com/v1/anime?title=${url.searchParams.get('title')}&formats=0,1`);
    const url_anime=`https://api.aniapi.com/v1/anime?title=${req.params.name}&formats=0,1`;
console.log(url_anime);
const option = {
    "method":"GET",

}
const responce = await fetch(url_anime,option)
.then(res=>res.json())
.catch(e=>{
console.log(e);
})
const aone = (responce.data.documents[1])
const atwo = (responce.data.documents[2])
const athree = (responce.data.documents[3])
const afour = (responce.data.documents[4])


console.log(aone.titles.en);
console.log(responce.data.documents);

 res.render('search', { 
     text: url_anime,
     ten1: aone.titles.en,
     tjp1: aone.titles.jp,
     im1: aone.cover_image,
    ten2: atwo.titles.en,
    tjp2: atwo.titles.jp,
    im2: atwo.cover_image,
    ten3: athree.titles.en,
    tjp3: athree.titles.jp,
    im3: athree.cover_image,
    ten4: afour.titles.en,
    tjp4: afour.titles.jp,
    im4: afour.cover_image,
    
    })
})

app.listen(port, () => console.log(`localhost:${port}`))