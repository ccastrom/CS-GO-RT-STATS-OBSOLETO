const mapDust2Wins=document.getElementById('dust2Map').value
const mapInfernoWins=document.getElementById('infernoMap').value
const mapNukeWins=document.getElementById('nukeMap').value
const mapLakeMapWins=document.getElementById('lakeMap').value
const mapTrainMapWins=document.getElementById('trainMap').value

const labels_right_chart = [
    'Dust 2',
    'Inferno',
    'Nuke',
    'Lake',
    'Train',
   
  ];

  const data_right_chart = {
    labels: labels_right_chart,
    datasets: [{
      label: 'Map rounds wins',
      backgroundColor: [
        'rgba(209, 202, 174,0.3)','rgba(171, 26, 32,0.3)','rgba(237, 185, 30,0.3)','rgba(107, 117, 128,0.3)','rgba(254, 82, 8,0.3)'],
      borderColor: ['rgb(209, 202, 174)','rgb (171, 26, 32)','rgb(237, 185, 30)','rgb(107, 117, 128)','rgb(254, 82, 8)'],
      borderWidth:1,
      data: [mapDust2Wins, mapInfernoWins, mapNukeWins, mapLakeMapWins, mapTrainMapWins],
    }]
  };

  const config_right_chart = {
    type: 'bar',
    data: data_right_chart,
    options: {
      aspectRatio: 1,
      scales: {
        y: {
          ticks: {
            color: '#eaeaea'
          },
          grid: {
            color: 'rgba(226, 222, 222, 0.09)',
            lineWidth: 1
            
          }
        },
        x:{
          ticks: {
            color: '#eaeaea'
          }
        },
      
        
        
      }
      
     
    },
   
  };

  const right_chart = new Chart(
    document.getElementById('myChart3'),
    config_right_chart
  );



