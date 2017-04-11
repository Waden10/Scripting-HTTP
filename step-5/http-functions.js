var https = require('https');

function getHTML (options, callback) {

  https.get(options, function (response) {

    response.setEncoding('utf8');

    var dataChunks = "";
    response.on('data', function (data) {

      dataChunks += data;
      // console.log("got more data " + data.length)
    });

    response.on('end', function() {
      // console.log("\n\n\n ALL DATA: "+ dataChunks);
      console.log('Response stream complete.');
      callback(dataChunks);
    });

  });
}
module.exports = getHTML;
