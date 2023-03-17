import * as assert from "assert";
import { Player, DemoFile } from "demofile";
import * as fs from "fs";

interface PlayerStats {
  team: string;
  steamId: string;
  steamId64: string;
  playerName: string;
  kills: number;
  assists: number;
  deaths: number;
}



function parseDemoFile(path: string) {
  fs.readFile(path, (err, buffer) => {
    assert.ifError(err);

    const demoFile = new DemoFile();
    const stats: Record<string, PlayerStats> = {};
    let roundNumber = 0;
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
    demoFile.gameEvents.on('player_death', e => {
      const attacker = demoFile.entities.getByUserId(e.attacker);
      const victim = demoFile.entities.getByUserId(e.userid);
      const weapon = e.weapon;
      const headshot= e.headshot ? "HS":"";
      const attackerName = attacker ? attacker.name : "unnamed";
      const victimName = attacker ? attacker.name : "unnamed";
      const flashAssisted= e.assistedflash ? "Flash Assist!":"No Flash Assist"
      console.log( attackerName,[weapon,headshot,flashAssisted], victimName);
    });
    

    function capturePlayerStats(player: Player) {
     
      if (player.isFakePlayer) return;

      stats[player.steamId] = {
        team: player.team!.teamName,
        steamId: player.steamId,
        steamId64: player.steam64Id,
        playerName: player.name,
        kills: player.kills,
        assists: player.assists,
        deaths: player.deaths
      };
    }
    demoFile.gameEvents.on("player_disconnect", ({ userid }) => {
      const player = demoFile.entities.getByUserId(userid)!;
      console.log(`Player ${player.name} disconnected`);
      capturePlayerStats(player);
    });

    demoFile.on("end", e => {
      if (e.error) {
        console.error("Error during parsing:", e.error);
        process.exitCode = 1;
      } else {
        demoFile.players.forEach(capturePlayerStats);
        console.table(stats);
        logScores();
      }

      console.log("Finished.");
    });

    // Start parsing the buffer now that we've added our event listeners
    demoFile.parse(buffer);
  });
}

parseDemoFile("demoFile/003604522035113361740_0633235809.dem");