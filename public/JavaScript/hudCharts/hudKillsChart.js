

var round = 0;
var io = io();
var chart    = document.getElementById('myChart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(0, 199, 214, 0.32)');
gradient.addColorStop(0.3, 'rgba(0, 199, 214, 0.1)');
gradient.addColorStop(1, 'rgba(0, 199, 214, 0)');


var data  = {
    labels: [ '0', '1', '2', '3', '4', '5', '6','7','8','9', '10','11','12','13','14','15' ],
    datasets: [{
			label: 'Applications',
			backgroundColor: gradient,
			pointBackgroundColor: '#00c7d6',
			
      fill:true,
			borderColor: '#0e1a2f',
      borderWidth:1,
			data: []
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



/**
 * Doughnut Chart
 */

const labels_left_chart = [
  'Actual Money',
  'Money Spend',
  
];



var data = {
  labels: labels_left_chart,
  datasets: [{
    label: 'My First Dataset',
    data: ['',''],
    backgroundColor: [
      'rgba(0, 207, 222,0.5)',
      'rgba(206, 41, 41,0.5)',
     
    ],
   
    borderColor:[
      'rgb(0, 207, 222)',
      'rgb(239, 41, 41)',
     
    
  ],
  borderWith:1,
  borderRadius:1,
    hoverOffset: 4,
    cutout:'85%'
  }]
};



const centerText={
  id:'centerText',
  afterDatasetsDraw(chart,args,options){
    const {ctx,chartArea:{left,right,top,bottom,width,height}}=chart;
    ctx.save();
    ctx.font='bolder 30px Arial';
    ctx.fillStyle='rgb(235, 235, 235)';
    ctx.fillText("",120,160)
    ctx.restore();
    

    ctx.font='bolder 20px Arial';
    ctx.fillStyle='rgb(235, 235, 235)';
    ctx.fillText('',135,205)
    ctx.restore();
    
  }
}

const config_left_chart = {
  type: 'doughnut',
  data: data,
  options: {
    aspectRatio: 2,
      
  },
  plugins:[centerText]
};

const left_chart = new Chart(
  document.getElementById('myChart2'),
  config_left_chart
);

/**
 * Doughnut Chart
 */


io.on("round_data", (myData) => {
  const round = myData.Mapa.RondaActual;
  const roundKills = myData.Estado.round_kills;
  const roundKillsArray = []
  roundKillsArray.push(roundKills);

  const money= myData.Estado.money
  const equipmentValue= myData.Estado.equip_value

  document.getElementById('MoneyValue').innerHTML="Money: $"+money
  document.getElementById('EquipmentValue').innerHTML="Equipment Value: $"+equipmentValue
  

 left_chart.data.datasets[0].data[0]=money
 left_chart.data.datasets[0].data[1]=equipmentValue
 left_chart.update();

 

  for (let i = 0; i <= round; i++) {
    chartInstance.update();
    if (chartInstance.data.datasets[0].data.length <= round) {

      chartInstance.data.datasets[0].data.push(roundKills);


    }
  };

})












