var express = require('express');
var app = express();
const socket_handler=require('./socket_events/socket.js')
const http = require('http');
server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
portCSGO=3000;
webport=2626;


const Map = require('./services/map/Map');
const Player = require('./services/player/Player_id');
const Round = require('./services/round/Round');
const Player_weapons = require('./services/player/Player_weapons');
const Player_status = require('./services/player/Player_status');
const Player_match_stats = require('./services/player/Player_match_stats');
const jsonPersonal = require('./services/json/myjson');
const actualRound= require('./models/round_model');

const indexRoute=require('./routes/index');
const hudRoute=require('./routes/hud');
const accountRoute= require('./routes/account');
const mongoose= require('mongoose');


let mapInfo = new Map();
let playerInfo= new Player();
let roundInfo= new Round();
let weaponsInfo=new Player_weapons();
let player_status=new Player_status();
let player_match_stats=new Player_match_stats();
let cadenaJSON=[];


const passport=require('passport')
, session = require('express-session')
, SteamStrategy = require('./lib/passport/strategy')
, authRoutes = require('./routes/auth');


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


passport.use(new SteamStrategy({
  returnURL: 'http://localhost:2626/auth/steam/return',
  realm: 'http://localhost:2626/',
  apiKey: '5DC20E24D2E76A091F52A43BCCBFA67A'
},
(identifier, profile, done)=> {
  
  process.nextTick( ()=> {

  
    profile.identifier = identifier;
   
    return done(null, profile);
    
  });
}
));


app.use(session({
  secret: 'your secret',
  name: 'name of session id',
  resave: true,
  saveUninitialized: true}));


  app.use(passport.initialize());
  app.use(passport.session());


  
  socket_handler.socket_connection(io);
    server.listen(webport, () => {
    console.log('web page listening on *: '+webport);
  });

mongoose.connect("mongodb+srv://ccastrom:123@csgo.hws0u.mongodb.net/stats?retryWrites=true&w=majority"
).then(()=>console.log("DB CONNECTION SUCCESS")).catch((err)=>{
    console.log(err);
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',indexRoute);
app.use('/hud',hudRoute);
app.use('/account',accountRoute);
app.use('/auth', authRoutes);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");



server = http.createServer( (req, res) =>{

    if (req.method == 'POST') {
        console.log("Handling POST request...");
        res.writeHead(200, {'Content-Type': 'text/html'});

        var body = '';
        req.on('data', function (data) {
            body += data;
            var jsonGameData = JSON.parse(body);
            var id64 = jsonGameData.provider.steamid;

            mapInfo = Map.fillMapInfo(jsonGameData)
            playerInfo = Player.fillPlayerInfo(jsonGameData, id64, mapInfo._phase);
            roundInfo = Round.fillRoundInfo(jsonGameData, mapInfo._phase);
            
            weaponsInfo = Player_weapons.fill_player_weapons_info(jsonGameData, mapInfo._phase, id64);
            player_status = Player_status.fill_player_status_info(jsonGameData, mapInfo._phase, id64);
            player_match_stats = Player_match_stats.fill_player_match_stats(jsonGameData, mapInfo._phase, id64);
      
            cadenaJSON = jsonPersonal(id64, mapInfo, playerInfo, arrayRound, arrayWeapons, arrayPlayer_state, arrayPlayer_match_stats);
            socket_handler.socket_hud_data(io,cadenaJSON);
        });
        req.on('end', function () {
           
            // getRound();
                       
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





 


server.listen(portCSGO);
console.log('CSGO in game port listening at http://' + portCSGO);