var io =io();


console.log("js script working");

io.on("update",function(jsonData){
    var arma1;
    var arma1=jsonData.Armas.ArmaEquipada;
    document.getElementById("gun").innerHTML=arma1;
})