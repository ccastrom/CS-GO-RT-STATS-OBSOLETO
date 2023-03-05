
var round=0;
var io =io();


//

const labels = ["0","1","2","3","4","5","6","8","9","10","11","12","13","14","15","16"
    
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Kills per round',
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
  

  io.on("round_data",(dataBD,myData)=>{
     const round=myData.Mapa.RondaActual;
     const roundKills=myData.Estado.round_kills;
     const roundKillsArray=[]
     roundKillsArray.push(roundKills);

    //console.log(roundKills);

    for (let i = 0; i <= round; i++) {
      myChart.update();
      if( myChart.data.datasets[0].data.length <=round){

        myChart.data.datasets[0].data.push(roundKills);
        
        
      }
     
         
      };
      
    
  
      // myChart.data.datasets[0].data.push(roundKills)
     
    
    
   
 

    
 
  
    
  })

  

  // io.on("socket_test",(dataIncoming)=>{
  //   console.log(dataIncoming)

  //   var ArrayTest=dataIncoming

   

    
     
  //     myChart.data.datasets[0].data.push(ArrayTest);
      
    

    
   

  //   myChart.update();
  // })
   
   



    //  console.log("Actual Round: " +rondaActual);
    //  console.log("Kills: "+roundKills);
     
    //  for (let i = 0; i <= rondaActual; i++) {
    //   myChart.data.labels[i]=i;
    //     for (let j = 0; j <= rondaActual; j++) {
    //       myChart.data.datasets[0].data[j]=roundKills;
    //     }
     
      
      
    //  }
     
    
    
   
      
  



   
 