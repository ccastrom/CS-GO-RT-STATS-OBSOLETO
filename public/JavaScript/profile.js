

var ctRoundsValueFromEJS=document.getElementById("roundCT").value
var tRoundsValueFromEJS=document.getElementById("roundT").value
var userTeamFromEJS=document.getElementById("userTeam").value
var victoryOrDefeatFromEJS=document.getElementById("victoryOrDefeat")

console.log(ctRoundsValueFromEJS);
console.log(tRoundsValueFromEJS);
console.log(userTeamFromEJS);

if(ctRoundsValueFromEJS>tRoundsValueFromEJS && userTeamFromEJS=="CT"){
    victoryOrDefeatFromEJS.innerHTML="Victoria"
}else{
    victoryOrDefeatFromEJS.innerHTML="Derrota"
}
if(tRoundsValueFromEJS>ctRoundsValueFromEJS && userTeamFromEJS=="T"){
    victoryOrDefeatFromEJS.innerHTML="Victoria"
}else{
    victoryOrDefeatFromEJS.innerHTML="Derrota"
}

if(ctRoundsValueFromEJS===tRoundsValueFromEJS){
    victoryOrDefeatFromEJS.innerHTML="Empate" 
}

