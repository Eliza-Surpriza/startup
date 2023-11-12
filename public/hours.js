window.onload = function() {
    let projects = JSON.parse(localStorage.getItem('projects'));
    let table = document.getElementById('userProjects');
    let tbody = table.createTBody();
    let communityTable = document.getElementById('communityProjects');
    let ctbody = communityTable.createTBody();

for (let project of projects) {
    let row = tbody.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    
    console.log(project.time)
    let time = parseInt(project.time)
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / (1000 * 60)) % 60);
    let hours = Math.floor((time / (1000 * 60 * 60)));

    hours = ('0' + hours).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);

    cell1.textContent = project.projectName;
    cell2.textContent = hours + ":" + minutes + ":" + seconds;
};


fetch('/timer')
.then(response => response.json())
.then(data => {
    for (let project of data) {
        let row = ctbody.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        
        console.log(project.time)
        let time = parseInt(project.time)
        let seconds = Math.floor((time / 1000) % 60);
        let minutes = Math.floor((time / (1000 * 60)) % 60);
        let hours = Math.floor((time / (1000 * 60 * 60)));
    
        hours = ('0' + hours).slice(-2);
        minutes = ('0' + minutes).slice(-2);
        seconds = ('0' + seconds).slice(-2);
    
        cell1.textContent = project.name;
        cell2.textContent = project.projectName;
        cell3.textContent = hours + ":" + minutes + ":" + seconds;
    };
})
.catch(error => console.error('Error:', error));

};