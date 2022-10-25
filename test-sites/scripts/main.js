
var d = new Date();

var hour = d.getHours();
var mint = d.getMinutes();
var sec = d.getSeconds();

const myContent = document.querySelector("h2");
myContent.textContent = "Current tims is -> " + hour + ":" + mint + ":" + sec;


const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/p1.png") {
        myImage.setAttribute("src", "images/p2.png");
    } else {
        myImage.setAttribute("src", "images/p1.png");
    }

};

