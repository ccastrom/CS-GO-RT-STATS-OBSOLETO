
var round=0;
var io =io();




const labels = ["","","","","","",""
    
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  

  io.on("round_data",(roundData)=>{
   
    let vKills=[];
    var roundPhase=roundData.Ronda.FaseActual
    var rondaActual=roundData.Mapa.RondaActual;
    var roundKills=roundData.Estado.round_kills;

   




     console.log("Actual Round: " +rondaActual);
     console.log("Kills: "+roundKills);
     
     for (let i = 0; i <= rondaActual; i++) {
      myChart.data.labels[i]=i;
        for (let j = 0; j <= rondaActual; j++) {
          myChart.data.datasets[0].data[j]=roundKills;
        }
     
      myChart.update();
      
     }
     
    
    
   
      
   })



   
  // io.on("round_data",(data)=>{
  //   var actualRound=data.Mapa.RondaActual
  //   console.log("la data es: "+actualRound);
  //   document.getElementById("txtGun").textContent=actualRound;
   
   
  // })


 

//   io.on("update",function(jsonData){
    
//     round=jsonData.Mapa.RondaActual;
    
  
//     //myChart.data.datasets[0].data[0] = round
   
    
// })
