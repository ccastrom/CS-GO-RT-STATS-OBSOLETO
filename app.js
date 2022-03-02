const provider = require('./services/provider/provider');
const player_id = require('./services/player/player_id');
const map = require('./services/map/map');
const round = require('./services/round/round');
const player_weapons = require('./services/player/player_weapons');
const player_state = require('./services/player/player_state');
const player_match_stats = require('./services/player/player_match_stats');
const jsonPersonal = require('./services/json/myjson');
http = require('http');
fs = require('fs');
port = 3000;
host = '127.0.0.1';

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
        });
    }
    else
    {
        console.log("Not expecting other request types...");
        res.writeHead(200, {'Content-Type': 'text/html'});
		var html = '<html><body>HTTP Server at http://' + host + ':' + port + '</body></html>';
        res.end(html);
    }

});

server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);