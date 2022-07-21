var express = require('express');
var app = express();
const http = require('http');
server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
portCSGO=3000;
webport=2626;

const provider = require('./services/provider/provider');
const player_id = require('./services/player/player_id');
const map = require('./services/map/map');
const round = require('./services/round/round');
const player_weapons = require('./services/player/player_weapons');
const player_state = require('./services/player/player_state');
const player_match_stats = require('./services/player/player_match_stats');
const jsonPersonal = require('./services/json/myjson');
const actualRound= require('./models/round_model');

const indexRoute=require('./routes/index');
const hudRoute=require('./routes/hud');
const accountRoute= require('./routes/account');
const mongoose= require('mongoose');



let arrayMap=[];
let arrayPlayerId=[];
let arrayRound=[];
let arrayWeapons=[];
let arrayPlayer_state=[];
let arrayPlayer_match_stats=[];
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

  

io.on('connection', (socket) => {
    console.log('a user connected');

  });
  
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
            
        });
        req.on('end', function () {
            var datos = JSON.parse(body);
            idReal = provider(datos)
            arrayMap = map(datos);
            arrayPlayerId = player_id(datos, idReal, arrayMap[1]);
            arrayRound = round(datos, arrayMap[1]);
            arrayWeapons = player_weapons(datos, arrayMap[1], idReal);
            arrayPlayer_state = player_state(datos, arrayMap[1], idReal);
            arrayPlayer_match_stats = player_match_stats(datos, arrayMap[1],arrayMap[3], idReal);
      
            cadenaJSON = jsonPersonal(idReal, arrayPlayerId, arrayMap, arrayRound, arrayWeapons, arrayPlayer_state, arrayPlayer_match_stats);
            realtimedata(cadenaJSON);
            getRound();
           
            
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

let  realtimedata=(jsonData)=>{
    io.emit("update",jsonData);
 
}

let getRound=()=>{
  
  actualRound.findOne().sort({"round":1}).distinct("round").then(result=>{
    io.emit("RoundData",result)
  });
}


 


server.listen(portCSGO);
console.log('CSGO in game port listening at http://' + portCSGO);