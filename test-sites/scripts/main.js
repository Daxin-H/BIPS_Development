var d = new Date();
var hour = d.getHours();
var mint = d.getMinutes();
var sec = d.getSeconds();

const myHeader = document.querySelector("h1");
const myContent = document.querySelector("h2");
myContent.textContent = "Current tims is -> " + hour + ":" + mint + ":" + sec;
const client_id = 'c57a8bd108c9ebfa4db2';
const client_secret_id = 'ddf146cb7beb2374af8c5a0d2df8feb4eedf1330';

const inputValue = document.querySelector("#search");
const NameContainer = document.querySelector(".username");
const ProfileContainer = document.querySelector(".profile");
const RepoContainer = document.querySelector(".repo");
const UrlContainer = document.querySelector(".url");
const myImage = document.querySelector("img");
// myImage.onclick = () => {
// const mySrc = myImage.getAttribute("src");
// if (mySrc === "images/p1.png") {
//     myImage.setAttribute("src", "images/p2.png");
// } else {
//     myImage.setAttribute("src", "images/p1.png");
// }};

const fetchUser = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&
    client_secret=${client_secret_id}`);
    const data = await api_call.json();
    return { data }
}
const showData = () => {
    fetchUser(inputValue.value).then((res) => {
        console.log(res);
        NameContainer.innerHTML = `Name: <class = "username">${res.data.name}</span>`;
        ProfileContainer.innerHTML = `Username: <class = "profile">${res.data.login}</span>`;
        RepoContainer.innerHTML = `Repos: <span class = "profile-name">${res.data.public_repos}</span>`;
        UrlContainer.innerHTML = `URL: <span class = "profile-name">${res.data.html_url}</span>`;
        const mySrc = myImage.getAttribute("src");
        myImage.setAttribute("src", res.data.avatar_url);


    })
}
const mySearch = document.querySelector("button");
if (mySearch) {
    mySearch.addEventListener("click", () => {
        showData();
    })
}
