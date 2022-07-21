

const labels_right_chart = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data_right_chart = {
    labels: labels_right_chart,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config_right_chart = {
    type: 'bar',
    data: data_right_chart,
    options: {}
  };

  const right_chart = new Chart(
    document.getElementById('myChart3'),
    config_right_chart
  );



