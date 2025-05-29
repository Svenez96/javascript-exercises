const API_URL = ("http://example.com");

async function corsError() {
    let experiment = await fetch(API_URL, {
        method:"GET"
    })
    console.log(experiment)
}

corsError()