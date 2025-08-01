var Steam = require("steam"),
    util = require("util"),
    fs = require("fs"),
    csgo = require("csgo"),
    bot = new Steam.SteamClient(),
    steamUser = new Steam.SteamUser(bot),
    steamFriends = new Steam.SteamFriends(bot),
    steamGC = new Steam.SteamGameCoordinator(bot, 730),
    CSGOCli = new csgo.CSGOClient(steamUser, steamGC, true),
    readlineSync = require("readline-sync"),
    crypto = require("crypto");

    const mongoQuery= require('../mongoDB/Querys/mongoQuery')

Steam.servers = require('./servers.json')
const mongoose= require('mongoose');

mongoose.connect("mongodb+srv://ccastrom:123@csgo.hws0u.mongodb.net/stats?retryWrites=true&w=majority"
).then(()=>console.log("DB CONNECTION SUCCESS")).catch((err)=>{
    console.log(err);
});

/* Decoding Share Codes */
var scDecoder = new csgo.SharecodeDecoder("CSGO-bVOTe-q7fpk-bTPnb-XTsPa-4jmMC");
console.log("Sharecode CSGO-bVOTe-q7fpk-bTPnb-XTsPa-4jmMC decodes into: ");
console.log(scDecoder.decode());

function MakeSha(bytes) {
    var hash = crypto.createHash('sha1');
    hash.update(bytes);
    return hash.digest();
}

var onSteamLogOn = function onSteamLogOn(response){
        if (response.eresult == Steam.EResult.OK) {
            util.log('Logged in!');
        }
        else
        {
            util.log('error, ', response);
            process.exit();
        }
        steamFriends.setPersonaState(Steam.EPersonaState.Busy);
        util.log("Logged on.");

        util.log("Current SteamID64: " + bot.steamID);
        util.log("Account ID: " + CSGOCli.ToAccountID(bot.steamID));

        CSGOCli.launch();

        CSGOCli.on("unhandled", function(message) {
            util.log("Unhandled msg");
            util.log(message);
        });

        CSGOCli.on("ready", function() {
            util.log("node-csgo ready.");

            CSGOCli.matchmakingStatsRequest();
            CSGOCli.on("matchmakingStatsData", function(matchmakingStatsResponse) {
                // util.log("Avg. Wait Time: " + matchmakingStatsResponse.global_stats.search_time_avg);
                // util.log("Players Online: " + matchmakingStatsResponse.global_stats.players_online);
                // util.log("Players Searching: " + matchmakingStatsResponse.global_stats.players_searching);
                // util.log("Servers Online: " + matchmakingStatsResponse.global_stats.servers_online);
                // util.log("Servers Available: " + matchmakingStatsResponse.global_stats.servers_available);
                // util.log("Matches in Progress: " + matchmakingStatsResponse.global_stats.ongoing_matches);
                //console.log(JSON.stringify(matchmakingStatsResponse, null, 4));

                CSGOCli.playerProfileRequest(CSGOCli.ToAccountID(bot.steamID));
                CSGOCli.on("playerProfile", function(profile) {
                    console.log("Profile");
                //    console.log("Player Rank: " + CSGOCli.Rank.getString(profile.account_profiles[0].ranking.rank_id))
                //    console.log(JSON.stringify(profile, null, 2));
                });

                CSGOCli.requestRecentGames('3604519241237135651','3604522035113361740',26977);
                CSGOCli.on("matchList", function(list) {

                    //console.log(list.matches[0]);
                //    console.log("Match List");
                //    if (list.matches && list.matches.length > 0) {
                //         console.log(list.matches[0]);
                        //insertData(list.matches[0])
                //    }else{
                //     console.log("No hay partidas encontradas")
                //    }
                });
                
                
                // CSGOCli.richPresenceUpload({
                //     RP: {
                //         status: "Hello World!", // Sets rich presence text to "Hello World!"
                //         version: 13508, // Not sure what this value does
                //         time: 161.164087, // This might be the amount of time since you have started the game, not sure.
                //         "game:state": "lobby",
                //         steam_display: "#display_Lobby",
                //         connect: "+gcconnectG082AA752",
                //         "game:mode": "casual"
                //     }
                // });
                
                // steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S76561198084749846A6768147729D12557175561287951743
                //CSGOCli.itemDataRequest("76561198084749846", "6768147729", "12557175561287951743", "0");
                
                // CSGOCli.on("itemData", function(itemdata) {
                //     console.log(itemdata);
                // });
            });
        });

        CSGOCli.on("unready", function onUnready(){
            util.log("node-csgo unready.");
        });

        CSGOCli.on("unhandled", function(kMsg) {
            util.log("UNHANDLED MESSAGE " + kMsg);
        });
    },
    onSteamSentry = function onSteamSentry(sentry) {
        util.log("Received sentry.");
        require('fs').writeFileSync('sentry', sentry);
    },
    onSteamServers = function onSteamServers(servers) {
        util.log("Received servers.");
        fs.writeFileSync('servers.json', JSON.stringify(servers, null, 2));
    }

var username = 'franz09ish'
var password = ''


var logOnDetails = {
    "account_name": username,
    "password": password,
};


var sentry = fs.readFileSync('sentry');
if (sentry.length) {
    logOnDetails.sha_sentryfile = MakeSha(sentry);
}
bot.connect();
steamUser.on('updateMachineAuth', function(response, callback){
    fs.writeFileSync('sentry', response.bytes);
    callback({ sha_file: MakeSha(response.bytes) });
});
bot.on("logOnResponse", onSteamLogOn)
    .on('sentry', onSteamSentry)
    .on('servers', onSteamServers)
    .on('connected', function(){
        steamUser.logOn(logOnDetails);
    });


    function insertData(JSON){

        
            let insertData=mongoQuery.insertBotData(JSON)
            insertData.then(result=>{
                console.log("All ok: "+result);
            }).catch(err=>{
                console.log("Duplicated")
            })
           
        
    }
    
