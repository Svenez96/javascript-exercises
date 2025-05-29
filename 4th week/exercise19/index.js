const API_URL = ("https://jsonplaceholder.typicode.com/posts");

async function getRequest () {
    let request = await fetch(API_URL, {
        method:"GET"})
        console.log(request)
}

getRequest()