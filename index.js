const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>{
    res.json({message: "Welcome to LPTCDojo's Website Counter"});
});

require('./app/routes/counter.routes.js')(app);

app.listen(3000, () => {
    console.log("Server started");
})
