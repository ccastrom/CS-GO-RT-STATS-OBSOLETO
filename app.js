const provider = require('./services/provider/provider');
const player_id = require('./services/player/player_id');
const map = require('./services/map/map');
const round = require('./services/round/round');
const player_weapons = require('./services/player/player_weapons');
const player_state = require('./services/player/player_state');
const player_match_stats = require('./services/player/player_match_stats');
const jsonPersonal = require('./services/json/myjson');
const index=require('./routes/index');
const hud=require('./routes/hud');
const mongoose= require('mongoose');




mongoose.connect("mongodb+srv://ccastrom:AlphaBravoCharlie@csgo.hws0u.mongodb.net/stats?retryWrites=true&w=majority"
).then(()=>console.log("DB CONNECTION SUCCESS")).catch((err)=>{
    console.log(err);
});


var express = require('express');
var app = express();
const http = require('http');
server = http.createServer(app);
const { Server } = require('socket.io');
const { error } = require('console');
const ruta = require('./routes/index');
const io = new Server(server);
portCSGO=3000;
webport=2626;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',index);
app.use('/hud',hud)


io.on('connection', (socket) => {
    console.log('a user connected');
  });
  
  server.listen(webport, () => {
    console.log('listening on *:2626');
  });


app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

  


server = http.createServer( function(req, res) {

    if (req.method == 'POST') {
        console.log("Handling POST request...");
        res.writeHead(200, {'Content-Type': 'text/html'});

        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            var datos = JSON.parse(body);
            idReal = provider.provider(datos);
            vMap = map.map(datos);
            vPlayerId = player_id.player_id(datos, idReal, vMap[1]);
            vRound = round.round(datos, vMap[1]);
            vWeapons = player_weapons.player_weapons(datos, vMap[1], idReal);
            vPlayer_state = player_state.player_state(datos, vMap[1], idReal);
            vPlayer_match_stats = player_match_stats.player_match_stats(datos, vMap[1], idReal);
      
            cadenaJSON = jsonPersonal.jsonPersonal(idReal, vPlayerId, vMap, vRound, vWeapons, vPlayer_state, vPlayer_match_stats);
            realtimedata(cadenaJSON);
            
            res.end('')
        });
    }
    else
    {
        console.log("Not expecting other request types...");
        res.writeHead(200, {'Content-Type': 'text/html'});
        var html = "Puerto de cs go GSI: " + portCSGO;
        res.end(html);
    }

});

function realtimedata(jsonData){
    io.emit("update",jsonData)
}

 


server.listen(portCSGO);
console.log('Listening at http://' + portCSGO);