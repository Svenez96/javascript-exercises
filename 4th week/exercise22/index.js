const API_URL = ("http://example.com");

async function corsError() {
    let fetchPalle = await fetch(API_URL, {
        method:"GET"
    })
    console.log(fetchPalle)
}

corsError()