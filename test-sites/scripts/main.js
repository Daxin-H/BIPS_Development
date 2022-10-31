var d = new Date();
var hour = d.getHours();
var mint = d.getMinutes();
var sec = d.getSeconds();

const myHeader = document.querySelector("h1");
const myContent = document.querySelector("h2");
myContent.textContent = "Current tims is -> " + hour + ":" + mint + ":" + sec;


const gitHubForm = document.getElementById('gitHubForm');
const NameContainer = document.querySelector(".username");

// const Fetch_Issue = async (issue) => {
//   const Issue_api = await fetch(`https://api.github.com/repos/google/guava/issues`);
//   const issue_data = await Issue_api.json();

//   console.log(issue_data);
//   return issue_data;
// }


const countings = {
  'p3': 0,
  'type': 0,
  'package': 0,
  'java': 0,

}

const Fetch_Issue = () => {
  fetch(`https://api.github.com/repos/google/guava/issues`)
    .then(response => response.json())
    .then(data => {
      count_temp = formatResults(data, countings);
      console.log(countings);
      NameContainer.innerHTML = `<p><strong> P3:${countings['p3']} </p> 
      <p><strong> type:${countings['type']}</p> 
      <p><strong> java:${countings['java']}</p> 
      <p><strong> package:${countings['package']}</p> 
      `;
    })

    .catch(error => console.error(error))
};

const formatResults = (data, countings) => {
  // Loop over each object in data array
  for (let i in data) {
    for (let j in data[i].labels) {
      const issue = data[i].labels[j]

      if (issue.name.includes("package")) {
        countings['package'] += 1;
      }
      if (issue.name.includes("type")) {
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


Fetch_Issue();
