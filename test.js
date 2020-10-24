async function fetchText() {
    let response = await fetch('https://www.breakingbadapi.com/api/characters');
    let data = await response.json();
    console.log(data);
}


fetch('https://www.breakingbadapi.com/api/charactersn')
    .then(response => {
        console.log(response)
    })