const express = require("express")
const app = express()
const ejs = require('ejs');
const fs = require('fs');
const port = 8080;
var path = require('path')

//database connection


//static file
app.use(express.static(path.join(__dirname, "public")));



// Render index.ejs file
app.get('/', function (req, res) {
 
    // Render page using renderFile method
    ejs.renderFile('view/home/index.ejs', {},
        {}, function (err, template) {
            if (err) {
                throw err;
            } else {
                res.end(template);
            }
        });
});
 
// Server setup
app.listen(port, function (error) {
    if (error)
        throw error;
    else
        console.log("Server is running");
});