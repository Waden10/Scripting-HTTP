var https = require('https');

function getHTML (options, callback) {

  /* Add your code here */


  function printHTML (html) {
    console.log(html);


  }

  var buf = "";

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      buf += data;
        // console.log('data received', data)

    });


    response.on('end', function() {
      console.log('Response stream complete.', buf);
      callback();
    });

  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, function() {
  console.log('all done');
});