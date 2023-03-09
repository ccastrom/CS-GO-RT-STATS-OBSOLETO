
var killsFromEJS=document.getElementById("totalKills").value
var deathsFromEJS=document.getElementById("totalDeaths").value
var assistsFromEJS=document.getElementById("totalAssists").value


const labels = [
  'Kills',
  'Death',
  'Assists',
  ];

  const data = {
    labels: labels,
   
    datasets: [{
      label: 'My First Dataset',
      data: [killsFromEJS, deathsFromEJS, assistsFromEJS],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
  };

  const config = {
    type: 'radar',
    data: data,
    options: {
      plugins:{
        legend:{
          labels:{
            color:"white"
          }
        }
      }, 
      scales: {
        r: {
         
                ticks: {
                    stepSize: 5,
                    textStrokeColor: 'rgb(54, 162, 235)',
                    color: 'rgba(240, 240, 240, 0.5)',
                    backdropColor: 'rgb(47, 56, 62)'
                },
                angleLines: {
                    color: 'rgba(240, 240, 240,0.5)',
                },
          grid: {
            color: "white",
          },
          pointLabels:{
            color:"white"
          }
        },      
},
      
    }
  };

  const myChart = new Chart(
    document.getElementById('radarChart'),
    config
  );