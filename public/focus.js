window.onload = function() {
    let timer, elapsedTime, projects = [];

document.querySelector("#start").addEventListener("click", function() {
    let startTime = Date.now();
    timer = setInterval(() => {
        // This code block will run every 1000 milliseconds (or 1 second)
    elapsedTime = Date.now() - startTime;
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let hours = Math.floor((elapsedTime / (1000 * 60 * 60)));

    hours = ('0' + hours).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);
    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
    }, 1000);
});

async function getUserName() {
    response = await fetch('/user/me');
    user = await response.json();
    console.log(`user.name: ${user.name}`);
    console.log(`user: ${user}`);
    return user.name;
}

document.querySelector("#stop").addEventListener("click", async function() {
    clearInterval(timer);
    let project = {
        name: await getUserName(),
        projectName: selectMenu.value,
        time: elapsedTime.toString()
    };
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
    fetch('/timer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', data);
    });

});


const form = document.querySelector("#form");
const inputBox = document.querySelector("#inputBox");
const selectMenu = document.querySelector("#selectMenu");

let items = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let newItem = inputBox.value;
    items.push(newItem);

    let option = document.createElement("option");
    option.text = newItem;
    option.value = newItem;
    selectMenu.add(option);

    form.reset();
});

};