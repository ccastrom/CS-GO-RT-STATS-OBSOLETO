
  const labels_left_chart = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data_left_chart = {
    labels: labels_left_chart,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config_left_chart = {
    type: 'line',
    data: data_left_chart,
    options: {}
  };

  const left_chart = new Chart(
    document.getElementById('myChart2'),
    config_left_chart
  );
  