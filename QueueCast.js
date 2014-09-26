//grab express module------------[R7]
var express = require("express"),
    app     = express(),
    port    = 9999;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // NOT SAFE FOR PRODUCTION
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
//legacy style
/*app.configure(function() {
    app.use(allowCrossDomain);
    app.use(express.static(__dirname));
});*/


app.use(allowCrossDomain);
app.use(express.static(__dirname));

app.listen(port);