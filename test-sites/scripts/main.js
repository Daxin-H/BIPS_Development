const Fetch_Issue = async (out_num) => {
  const data = await fetch(`https://api.github.com/repos/google/guava/issues?per_page=2000&page=1`)
    .then((response) => response.json())
    .then((data) => {
      const NameContainer = document.querySelector('.username');
      const countings = {
        p3: 0,
        type: 0,
        package: 0,
        java: 0,
      };

      count_temp = formatResults(data, countings);
      console.log(countings);
      NameContainer.innerHTML = `<p><strong> P3:${countings['p3']} </p>
      <p><strong> type:${countings['type']}</p>
      <p><strong> java:${countings['java']}</p>
      <p><strong> package:${countings['package']}</p>
      `;
      out_num = countings;

      const ctx = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [],
          datasets: [
            {
              label: '# of Votes',
              data: [],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      console.log(data);
      // process result

      myChart.data.datasets[0].data = Object.keys(countings).map(
        (key) => countings[key]
      );
      myChart.data.labels = Object.keys(countings);

      myChart.update();
    })
    .catch((error) => console.error(error));
};

const formatResults = (data, countings) => {
  // Loop over each object in data array
  for (let i in data) {
    for (let j in data[i].labels) {
      const issue = data[i].labels[j];

      if (issue.name.includes('package')) {
        countings['package'] += 1;
      }
      if (issue.name.includes('type')) {
        countings['type'] += 1;
      }
      if (issue.name === 'java') {
        countings['java'] += 1;
      }
      if (issue.name === 'P3') {
        countings['p3'] += 1;
      }
    }
  }
};

const out_num = {};
Fetch_Issue(out_num);