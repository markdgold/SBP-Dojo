require('dotenv').config();
var imgur = require('imgur-node-api');
var clientID = process.env.IMGUR_CLIENT_ID;
var path = require('path');
var express = require('express');

var app = express();

app.get('/', function(req, res) {
    var imgurLink = '';
    imgur.setClientID(clientID);
    imgur.upload(path.join(__dirname, '/public/img/sbpLogo.png'), function(err, res) {
        console.log(res.data.link); // Log the imgur url
        res.send(res.data.link);
    });

    res.send('link', imgurLink);
});

app.listen(3000);
