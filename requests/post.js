var fs = require("fs");

module.exports = {

    post : function(app) {
        app.post('/addStream', function (req, res) {
            // Read in existing data
            fs.readFile( __dirname + "/" + "device.json", 'utf8', function (err, data) {
               data = JSON.parse(data);
               // Add new data to the json array
               data.push(stream)
               console.log(data);
               res.end(JSON.stringify(data));
            });
         })
    }
}

var stream = 
{
    "stream": {
      "APIKey": 1234,
      "DeviceID": 1,
      "StreamName": "Temp1",
      "Trend": false,
      "RandomScope": 0.5,
      "hourValues": {
        "h0": 72,
        "h1": 82,
        "h2": 85,
        "h3": 90,
        "h4": 87,
        "h5": 82,
        "h6": 78,
        "h7": 72,
        "h8": 65,
        "h9": 68,
        "h10": 70,
        "h11": 67,
        "h12": 65,
        "h13": 67,
        "h14": 72,
        "h15": 77,
        "h16": 83,
        "h17": 87,
        "h18": 82,
        "h19": 78,
        "h20": 72,
        "h21": 65,
        "h22": 68,
        "h23": 70,
        "h24": 67
      }
    }
  }
