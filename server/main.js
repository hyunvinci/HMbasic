var http = require('http');
var fs = require('fs');
var url = require('url');
var port = 52274; 

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    //var message = window.prompt("What do you want to say?");  
  
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    var template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
<script>
//var message = window.prompt("What do you want to say?");
//document.write("<h1>Get this link = http://192.168.1.46:"+port+"/?id="+message+"</h1>");
</script>    

    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
<script>
var message = window.prompt("What do you want to say?");
var message2 = message;
</script>      
<ul>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ul>
<script>
document.write("<h2> HeartMade Card Has been Made - http://192.168.1.46:52275/?id="+message+"</h2>");
</script>
      <h2>${title}</h2>
      <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
      <img src="coding.jpg" width="100%">
      </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
      </p>
    </body>
    </html>
    `;
    response.end(template);
 
});
app.listen(port);
console.log('Server Running at http://192.168.1.46:'+`${port}`);
