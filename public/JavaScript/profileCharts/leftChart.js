
  var killsFromEJS=document.getElementById("totalKills").value
  var deathsFromEJS=document.getElementById("totalDeaths").value
  var killsAndDeathsValue= (killsFromEJS/deathsFromEJS);




  function twoDecimals(number){
    let parseNumber=number.toString();
    let regex=/(\d*.\d{0,2})/
    return parseNumber.match(regex)[0]
  }
  
  var killsAndDeathsValueTruncated= twoDecimals(killsAndDeathsValue)
  
  
  const labels_left_chart = [
    'Kills',
    'Deaths',
    
  ];

  const data_left_chart = {
    labels: labels_left_chart,
    datasets: [{
      label: 'My First Dataset',
      data: [killsFromEJS, deathsFromEJS],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
      ],
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
      ctx.fillStyle='rgb(255, 99, 132)';
      ctx.fillText(killsAndDeathsValueTruncated,140,170)
      ctx.restore();
    

      ctx.font='bolder 20px Arial';
      ctx.fillStyle='rgb(255, 99, 132)';
      ctx.fillText('K/D',154,230)
      ctx.restore();
      
    }
  }

  const config_left_chart = {
    type: 'doughnut',
    data: data_left_chart,
    options: {
        
    },
    plugins:[centerText]
  };

  const left_chart = new Chart(
    document.getElementById('myChart2'),
    config_left_chart
  );
  
  