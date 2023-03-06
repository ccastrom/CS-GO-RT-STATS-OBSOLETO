
var round = 0;
var io = io();
const labels = ["0", "1", "2", "3", "4", "5", "6", "8", "9", "10", "11", "12", "13", "14", "15", "16"

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


io.on("round_data", (myData) => {
  const round = myData.Mapa.RondaActual;
  const roundKills = myData.Estado.round_kills;
  const roundKillsArray = []
  roundKillsArray.push(roundKills);


  for (let i = 0; i <= round; i++) {
    myChart.update();
    if (myChart.data.datasets[0].data.length <= round) {

      myChart.data.datasets[0].data.push(roundKills);


    }
  };

})












