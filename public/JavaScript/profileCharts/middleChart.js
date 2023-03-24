var rankOld= document.getElementById('userRankOld').value;
var rankNew= document.getElementById('userRankNew').value;
var date= document.getElementById('matchDate').value;

var chart    = document.getElementById('MyChart1').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(0, 199, 214, 0.32)');
gradient.addColorStop(0.3, 'rgba(0, 199, 214, 0.1)');
gradient.addColorStop(1, 'rgba(0, 199, 214, 0)');

const pointImage= new Image(55,25);
pointImage.src='https://raw.githubusercontent.com/SteamDatabase/GameTracking-CSGO/0e457516ba13817a45b6c2a1d262fe7d0599bcbc/csgo/pak01_dir/resource/flash/econ/status_icons/skillgroup_expired.png'

var data  = {
    labels: [ '10-03-2023' ],
    datasets: [{
			label: 'Rank History',
			backgroundColor: gradient,
			pointBackgroundColor: '#00c7d6',
			tension:0.4,
      fill:true,
			borderColor: '#0e1a2f',
      borderWidth:1,
			data: []
    }]
};

var options = {
	elements:{
		point:{
			pointStyle:[pointImage]
		}
		
	},
	responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
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
  
    
    
	},
	
	legend: {
		display: false
	},
	point: {
		backgroundColor: '#00c7d6'
	},

};

var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
		options: options
});

chartInstance.data.datasets[0].data.push(rankOld)
chartInstance.update();

  