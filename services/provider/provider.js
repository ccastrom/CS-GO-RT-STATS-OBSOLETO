function provider(JSON){
    var steamID=JSON.provider.steamid;
    return steamID;
}
   
module.exports=provider;