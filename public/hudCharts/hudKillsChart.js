
var round=0;
var io =io();




const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [20,30,40,12,25],
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

  io.on("RoundData",function(roundData){
   
    
    var rondaActual=JSON.parse(JSON.stringify(roundData));
    
    
    
    for (let i = 0; i < rondaActual.length; i++) {
      const element = rondaActual[i];
      console.log(element);
      myChart.data.labels[i] = element;
     
      myChart.update();
    }
    
   
      
  })

  io.on("update",function(jsonData){
    
    round=jsonData.Mapa.RondaActual;
    
  
    //myChart.data.datasets[0].data[0] = round
   
    
})
