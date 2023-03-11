var chart    = document.getElementById('MyChart1').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(0, 199, 214, 0.32)');
gradient.addColorStop(0.3, 'rgba(0, 199, 214, 0.1)');
gradient.addColorStop(1, 'rgba(0, 199, 214, 0)');


var data  = {
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October', 'November','December' ],
    datasets: [{
			label: 'Applications',
			backgroundColor: gradient,
			pointBackgroundColor: '#00c7d6',
			tension:0.4,
      fill:true,
			borderColor: '#0e1a2f',
      borderWidth:1,
			data: [60, 45, 80, 30, 35, 55,25,80,40,50,80,50]
    }]
};

var options = {
	responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		y: {
      ticks: {
        color: '#5e6a81'
      },
			grid: {
				color: 'rgba(226, 222, 222, 0.09)',
        lineWidth: 1
				
			}
		},
    x:{
      ticks: {
        color: '#5e6a81'
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



  