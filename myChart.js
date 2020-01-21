let dwnldsBarChartCtx = document.getElementById('dwnldsBarChart').getContext('2d');
let dwnldsBarChart = new Chart(dwnldsBarChartCtx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Deliveroo',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [15, 10, 5, 2, 20, 30, 45]
            },
            {
                label: 'UberEats',
                backgroundColor: 'rgb(132, 99, 255)',
                borderColor: 'rgb(132, 99, 255)',
                data: [20, 25, 10, 20, 40, 45, 60]
            },
        ]
    },
    // Configuration options go here
    options: {}
});

let bubbleOptions = {
    type: 'bubble',
    data: {
      datasets: [
        {
          label: 'Deliveroo',
          data: [
            {
              x: 3,
              y: 5.5,
              r: 20
            }
          ],
          backgroundColor:"rgb(255, 99, 132)",
          hoverBackgroundColor: "rgb(255, 99, 132)"
        },
        {
          label: 'UberEats',
            data: [
              {
                x: 4,
                y: 2,
                r: 30
              }
            ],
            backgroundColor:"rgb(132, 99, 255)",
            hoverBackgroundColor: "rgb(132, 99, 255)"
        },
        {
          label: 'JustEat',
            data: [
              {
                x: 2,
                y: 6,
                r: 10
              }
            ],
            backgroundColor:"rgb(99, 132, 255)",
            hoverBackgroundColor: "rgb(99, 132, 255)"
        },
        {
          label: 'Ringo',
            data: [
              {
                x: 5,
                y: 3,
                r: 10
              }
            ],
            backgroundColor:"#ff6384",
            hoverBackgroundColor: "#ff6384"
        },
        {
          label: 'John',
            data: [
              {
                x: 2,
                y: 1,
                r: 10
              }
            ],
            backgroundColor:"#ff6384",
            hoverBackgroundColor: "#ff6384"
        },
        {
          label: 'George',
            data: [
              {
                x: 1,
                y: 3,
                r: 10
              }
            ],
            backgroundColor:"#ff6384",
            hoverBackgroundColor: "#ff6384"
        },
        {
          label: 'Ringo',
            data: [
              {
                x: 1,
                y: 1,
                r: 10
              }
            ],
            backgroundColor:"#ff6384",
            hoverBackgroundColor: "#ff6384"
        },
        {
          label: 'George',
            data: [
              {
                x: 1,
                y: 2,
                r: 10
              }
            ],
            backgroundColor:"#ff6384",
            hoverBackgroundColor: "#ff6384"
        }
        ]
    }
  }
  
  var bubbleCtx = document.getElementById('bubbleChart').getContext('2d');
  new Chart(bubbleCtx, bubbleOptions);