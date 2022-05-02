const path = require('path');

var express = require('express'),
        app = express(),
        zip = require('express-easy-zip');



//include zip
app.use(zip());
app.use('/compute', function(req, res){
    res.zip({
        files: [
            { path: '/home/pm2/.compute/', name: `.compute` }    //zip a folder
        ],
        filename: `compute.zip`
    });
}); 

app.listen(3000);
