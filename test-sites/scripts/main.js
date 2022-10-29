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

const Fetch_Issue = () => {
  fetch(`https://api.github.com/repos/google/guava/issues`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      formatResults(data);
    })
    .catch(error => console.error(error))
};


const formatResults = (data) => {
  // Loop over each object in data array
  for (let i in data) {
    for (let j in data[i].labels) {

      // Create the html markup for each li
      console.log(data[i].labels[j]);
    }

  }
};
// NameContainer.innerHTML = `Name: <class = "username">${data[0].title}</span>`;
// 


Fetch_Issue();