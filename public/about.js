window.onload = function() {
fetch('https://cat-fact.herokuapp.com/facts')
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => 
        document.querySelector('#catFact').innerText = data[0].text
        )
    .catch((error) => console.error('Error:', error));
}