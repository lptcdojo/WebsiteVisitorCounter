const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>{
    res.json({message: `Welcome to LPTCDojo's Website Counter`});
});

require('./app/routes/counter.routes.js')(app);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started");
})
