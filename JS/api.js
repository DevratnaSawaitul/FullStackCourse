// fetch is used in browser so node can't run use html to and see console for results
/* let response = fetch('https://catfact.ninja/fact');
console.log('this is response', response); not recommende way*/

fetch('https://catfact.ninja/fact')
    .then((response) => {
        // as json is also returning promise as it take time to convert we have to return the data so it will treat as promise and .then() can use it
        return response.json();
    }).then((data) => {
        // as res.json() return promise so here .then() can be used to accept the data
        console.log(data);
    })
    .catch((response) => {
        console.log("error loading fact")
    });

// 2nd approach
async function callApi() {
    try {
        let response = await fetch('https://catfact.ninja/fact');
        let jsonres = await response.json();
        console.log('async await use: ', jsonres);
    } catch (e) {
        console.log(e);
    }
}

callApi();