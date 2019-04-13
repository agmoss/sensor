var fs = require("fs");

module.exports = {

    get : (app) => {
        app.get('/listData', (req, res) => {
            fs.readFile( "./device.json", 'utf8',  (err, data) => {
               console.log(data);
               res.end(data);
            });
         })
    },
    
    
    getById : (app)=>{

        app.get('/:id', (req, res) => {
            // First read existing users.
            fs.readFile( "./device.json", 'utf8', (err, data) => {
               var devices = JSON.parse(data);

               // Locate devices
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

