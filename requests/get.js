var fs = require("fs");

module.exports = {

    get : function (app) {
        app.get('/listData', function (req, res) {
            fs.readFile( __dirname + "/" + "device.json", 'utf8', function (err, data) {
               console.log(data);
               res.end(data);
            });
         })
    },
    
    
    getById : function(app){

        app.get('/:id', function (req, res) {
            // First read existing users.
            fs.readFile( __dirname + "/" + "device.json", 'utf8', function (err, data) {
               var devices = JSON.parse(data);

                for(var i = 0; i < devices.length; i++)
                {
                    if(devices[i].stream.DeviceID == req.params.id)
                    {
                        var device = devices[i];
                        console.log(device);
                        res.end( JSON.stringify(device));

                    }
                }
            });
         })

    }
}

