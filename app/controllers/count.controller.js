const fs = require('fs');

exports.read = (req, res) => {
    fs.readFile('./app/data/count.json', (err, data) => {
        if (err) throw err;
        let count = JSON.parse(data);
        if(req.params.site in count){
            res.json({Count: count[req.params.site]});
        }else{
            res.json({error: `Site ${req.params.site} does not exist`});
        }
    });
}

exports.write = (req, res) => {
    fs.readFile('./app/data/count.json', (err, data) => {
        if (err) throw err;
        let count = JSON.parse(data);
        if(req.params.site in count){
            count[req.params.site] += 1;
            let data = JSON.stringify(count);
            fs.writeFile("./app/data/count.json", data, (err) => {
                if (err) throw err;
                res.json({message: "Successfully incremented counter"});
            })
        }else{
            res.json({error: `Site ${req.params.site} does not exist`});
        }
    });
}
