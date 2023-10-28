window.onload = function() {
    let timer, elapsed_time;

document.querySelector("#start").addEventListener("click", function() {
    let start_time = Date.now();
    timer = setInterval(() => {
        // This code block will run every 1000 milliseconds (or 1 second)
    elapsed_time = Date.now() - start_time;
    let seconds = Math.floor((elapsed_time / 1000) % 60);
    let minutes = Math.floor((elapsed_time / (1000 * 60)) % 60);
    let hours = Math.floor((elapsed_time / (1000 * 60 * 60)));

    hours = ('0' + hours).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);
    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
    }, 1000);
});

document.querySelector("#stop").addEventListener("click", function() {
    clearInterval(timer);
    localStorage.setItem('newTime', elapsed_time.toString());
});
};