

var round = 0;
var io = io();

/**
 * Line Chart
 */
var chart    = document.getElementById('myChart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(0, 199, 214, 0.32)');
gradient.addColorStop(0.3, 'rgba(0, 199, 214, 0.1)');
gradient.addColorStop(1, 'rgba(0, 199, 214, 0)');


var data  = {
    labels: [ '0', '1', '2', '3', '4', '5', '6','7','8','9', '10','11','12','13','14','15' ],
    datasets: [{
			label: 'Kills per round',
			backgroundColor: '#39963f',
			pointBackgroundColor: '#39963f',
			
      
			borderColor: '#39963f',
      borderWidth:1,
			data: []
    },
    {
			label: 'Headshots per round',
			backgroundColor: '#c6a235',
			pointBackgroundColor: '#c6a235',
			
     
			borderColor: '#c6a235',
      borderWidth:3,
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
		labels:{
      fontColor:"red"
    }
	},
	point: {
		backgroundColor: '#eaeaea'
	},

};



var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
		options: options
});

/**
 * Line Chart
 */



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




const config_left_chart = {
  type: 'doughnut',
  data: data,
  options: {
    aspectRatio: 2,
      
  },
 
};

const left_chart = new Chart(
  document.getElementById('myChart2'),
  config_left_chart
);

/**
 * Doughnut Chart
 */




const labels_bar_chart = [
  'CT LOSS',
  'T LOSS',
  
];

const data_bar_chart = {
  labels: labels_bar_chart,
  datasets: [{
    label: ['CT Consecutive Loss','T Consecutive Loss'],
    backgroundColor: ['rgba(255, 99, 132,1)',"green"],
    borderColor: ['rgba(255, 99, 132,1)', "green"],
    barPercentage:0.4,
    data: [],
  },
  
 ],
 
  
};

const config_bar_chart = {
  type: 'bar',
  data: data_bar_chart,
  options: {
    aspectRatio: 2,
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
  }
};

const bar_chart = new Chart(
  document.getElementById('barChartHUD'),
  config_bar_chart
);




io.on("round_data", (myData) => {
  const playerTeam=myData.player_id.Equipo
  const ctConsecutiveLossRounds=myData.Mapa.RondasPerdidasConsecutivasCT
  const tConsecutiveLossRounds=myData.Mapa.RondasPerdidasConsecutivasT
  const round = myData.Mapa.RondaActual;
  const roundKills = myData.Estado.round_kills;
  const roundKillsHS = myData.Estado.round_killsHS;
  const roundKillsArray = []
  const money= myData.Estado.money
  const equipmentValue= myData.Estado.equip_value
  const defuser= myData.Estado.defuseKit;
  const equipedWeapon= myData.Armas.ArmaEquipada;
  const primaryWeapon= myData.Armas.MunicionRestanteArma1;
  const secondaryWeapon= myData.Armas.MunicionRestanteArma2;
  
  console.log(primaryWeapon);
  console.log(ctConsecutiveLossRounds);
  console.log(tConsecutiveLossRounds);

  if(playerTeam=="CT" && defuser ){
    document.getElementById("cardDefuser").style.visibility = "visible";
    document.getElementById('defuserStatus').innerHTML="Defuser equipped"
  }else{
    document.getElementById("cardDefuser").style.visibility = "hidden";
    document.getElementById('defuserStatus').innerHTML="Defuser not equipped"
  }

  roundKillsArray.push(roundKills);

  if(primaryWeapon){
    document.getElementById('weaponAmmo').innerHTML=primaryWeapon
  }else{
    document.getElementById('weaponAmmo').innerHTML= "-"
  }
  if(secondaryWeapon){
    document.getElementById('weapon2Ammo').innerHTML=secondaryWeapon
  }else{
    document.getElementById('weapon2Ammo').innerHTML= "-"
  }

  document.getElementById('MoneyValue').innerHTML="Money: $"+money
  document.getElementById('EquipmentValue').innerHTML="Equipment Value: $"+equipmentValue
  
  
  
  

 left_chart.data.datasets[0].data[0]=money
 left_chart.data.datasets[0].data[1]=equipmentValue
 left_chart.update();

 bar_chart.data.datasets[0].data[0]=ctConsecutiveLossRounds;
 bar_chart.data.datasets[0].data[1]=tConsecutiveLossRounds;
 bar_chart.update();

  for (let i = 0; i <= round; i++) {
    chartInstance.update();
    if (chartInstance.data.datasets[0].data.length <= round) {

      chartInstance.data.datasets[0].data.push(roundKills);
      chartInstance.data.datasets[1].data.push(roundKillsHS);


    }
  };



})












