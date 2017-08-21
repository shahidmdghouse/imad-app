var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Article One | Shahid Ghouse',
    heading: 'Article One',
    date: 'Aug 8 2016',
    content: `<p>
                  This a Article One page Response, This a Article One page Response, This a Article One page Response, This a Article One page Response, This a Article One page Response, This a Article One page Response, This a Article One page Response,
              </p>
              
              <p>
                  This a Article One page Response, This a Article One page Response, This a Article One page Response, This a Article One page Response, This a Article One page Response, This a Article One page Response, This a Article One page Response,
              </p>
              
              <p>
                  This a Article One page Response, This a Article One page Response, This a Article One page Response, This a Article One page Response, This a Article One page Response, This a Article One page Response, This a Article One page Response,
              </p>`
};

function createTemplete (data){
    
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplete=`<html>
  <head>
    <title>${title}</title>
    <meta name="viewpoint" content="width=deivce-width, intial-scale=1.0" />
    <link href="/ui/style.css" rel="stylesheet">
  </head>
  <body>
      
      <div class="container">
          <div>
              <a href="/">Home</a>
          </div>
          <hr>
          
          <h3>${heading}</h3>
          
          <div>
              ${date}
          </div>
          
          <div>
              ${content}
          </div>
      </div> 
  </body>
</html>`;

return htmlTemplete;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res){
   res.send(createTemplete(articleOne));
});

app.get('/article-two', function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html')); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
