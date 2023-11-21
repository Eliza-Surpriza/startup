window.onload = async function() {
    let projects = JSON.parse(localStorage.getItem('projects'));
    let table = document.getElementById('userProjects');
    let tbody = table.createTBody();
    let communityTable = document.getElementById('communityProjects');
    let ctbody = communityTable.createTBody();
    let name = await getUserName();
    console.log('hours page loaded')
    document.getElementById('userProjTitle').innerText = `${name}'s Projects`;
    async function getUserName() {
        response = await fetch('/user/me');
        user = await response.json();
        console.log(`user.name: ${user.name}`);
        console.log(`user: ${user}`);
        return user.name;
    }

    fetch('/timer')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let i = 0;
        for (let project of data) {
            
            let comrow = ctbody.insertRow();
            let comcell1 = comrow.insertCell();
            let comcell2 = comrow.insertCell();
            let comcell3 = comrow.insertCell();
            
            console.log(project.time)
            let time = parseInt(project.time)
            let seconds = Math.floor((time / 1000) % 60);
            let minutes = Math.floor((time / (1000 * 60)) % 60);
            let hours = Math.floor((time / (1000 * 60 * 60)));

            hours = ('0' + hours).slice(-2);
            minutes = ('0' + minutes).slice(-2);
            seconds = ('0' + seconds).slice(-2);
            if(i < 5){
                comcell1.textContent = project.name;
                comcell2.textContent = project.projectName;
                comcell3.textContent = hours + ":" + minutes + ":" + seconds;
            }
            if (name == project.name) {
                let row = tbody.insertRow();
                let cell1 = row.insertCell();
                let cell2 = row.insertCell();
                cell1.textContent = project.projectName;
                cell2.textContent = hours + ":" + minutes + ":" + seconds;
            }
            i++;
        };
    })
    .catch(error => console.error('Error:', error));


};