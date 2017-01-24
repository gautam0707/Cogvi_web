var express = require('express');
var expressObj = express();
var port = 80;

expressObj.use(express.static('public'));
expressObj.get('/',function(req, resp){
    resp.sendFile('./public/index.html')
});
expressObj.listen(port, function (err) {
    if (err) {
        console.log('something went wrong..' + err);
    } else {
        console.log('Listening on port ' + port);
        }
});
