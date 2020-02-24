let div = document.createElement("div");
div.id = "clock";
let containerId = document.getElementById("container");
containerId.prepend(div);
// console.log(containerId);

function clock() {
    let date = new Date();
    let hours = (date.getHours() < 10) ? "0" + date.getHours() : date.getHours();
    let minutes = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
    let seconds = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();
    // console.log(hours + ":" + minutes + ":" + seconds)
    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(clock, 1000);