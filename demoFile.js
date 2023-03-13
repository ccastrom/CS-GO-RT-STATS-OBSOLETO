const fs = require("fs");
const demofile = require("demofile");

const demoFile = new demofile.DemoFile();




// demoFile.on("start", () => {
//   console.log("Demo header:", demoFile.header);
// });
// demoFile.gameEvents.on("player_death", e => {
//   const victim = demoFile.entities.getByUserId(e.userid);
//   const victimName = victim ? victim.name : "unnamed";

//   // Attacker may have disconnected so be aware.
//   // e.g. attacker could have thrown a grenade, disconnected, then that grenade
//   // killed another player.
//   const attacker = demoFile.entities.getByUserId(e.attacker);
//   const attackerName = attacker ? attacker.name : "unnamed";

//   const headshotText = e.headshot ? " HS" : "";

//   console.log(`${attackerName} [${e.weapon}${headshotText}] ${victimName}`);
// });

let roundNumber = 1;

function logScores() {
  const teams = demoFile.teams;
  const terrorists = teams[2];
  const cts = teams[3];

  const rounds = terrorists.score + cts.score;
  const tr_score = terrorists.score;
  const ct_score = cts.score;

  console.log(`ROUND NUMBER: ${rounds}`);
  console.log(`CT : ${ct_score} vs T : ${tr_score}`);
  console.log("\n");
}

demoFile.gameEvents.on("round_start", (e) => {
  roundNumber += 1;
  logScores();
});

demoFile.on("end", (e) => {
  if (e.error) {
    console.error("Error during parsing:", e.error);
  } else {
    logScores();
  }
  console.log("Finished.");
});

demoFile.gameEvents.on('player_death', e => {
  const attacker = demoFile.entities.getByUserId(e.attacker);
  const victim = demoFile.entities.getByUserId(e.userid);
  const weapon = e.weapon;
  console.log(roundNumber, ':', attacker.name, 'killed', victim.name, 'with', weapon);
});


  
  

// demoFile.stringTables.on("update", e => {
//   if (e.table.name === "userinfo" && e.userData != null) {
//     console.log("\nPlayer info updated:");
//     console.log(e.entryIndex, e.userData);
//   }
// });

demoFile.parseStream(fs.createReadStream("003604522035113361740_0633235809.dem"));

/* Outputs:

HS [cz75a HS] flusha
Lekr0 [ak47 HS] friberg
KRIMZ [ak47] HS
JW [mac10 HS] Mixwell
JW [hegrenade] HS
JW [mac10 HS] Magisk

*/