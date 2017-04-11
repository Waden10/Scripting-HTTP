const https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

var requestOptions = {
  host: 'example.com',
  path: '/'
};

var buf = "";

https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    buf += data;

  });


  response.on('end', function() {
    console.log('Response stream complete.', buf);
  });

});
}

getAndPrintHTML();