const https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };



  https.get(requestOptions, (res) => {
    // console.log('statusCode:', res.statusCode);
    // console.log('headers:', res.headers);
    

    res.on('data', (d) => {
      // process.stdout.write(d);
      console.log("line start", d.toString('utf8'))
    });

  }).on('error', (e) => {
    console.error(e);
  });
}

getAndPrintHTMLChunks();