//const API_URL = ("https://jsonplaceholder.typicode.com/posts");
const API_URL = ("https://jsonplaceholder.typicode.com/posts/example");

async function errors (){
    let request = await fetch(API_URL, {
        method:"GET",
    })
    try {
        if(request.ok){
            console.log(request)
        }    else {
            throw new Error ("Can not reach server url")
        }
    } catch (error) {
        console.error(error.message)
    }
}

errors()