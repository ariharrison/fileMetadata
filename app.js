var express = require('express');
var multer  = require('multer');
var upload = multer(); 
var app = express();

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'ejs'); 


app.get('/', function(req, res) {
    res.render('index');
});

app.post('/profile', upload.single('myFile'), function (req, res) {
  res.json({size: req.file.size});
});
 

app.listen(app.get('port'), function() {
    console.log('Filemetadata Sevice is running');
});