var express = require('express'),
    fs = require('fs'),
    app = express();

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html');
});

app.get('/GetPDF', function (req, res) {

    var filePath = "/files/Understand_Programming_Task.pdf";
    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});

app.listen(3000, function(){
    console.log('Listening on 3000');
});
