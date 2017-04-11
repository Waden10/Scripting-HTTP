const https = require('https');

function getAndPrintHTML (options) {

  /* Add your code here */
  var buf = "";

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      buf += data;
      // console.log('data received', data)

    });


    response.on('end', function() {
      console.log('Response stream complete.', buf);
    });

  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions);