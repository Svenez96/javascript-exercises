const API_URL = ("https://jsonplaceholder.typicode.com/posts");

const post = {
    userId: "Jotaro Kujo",
    id: 101,
    title: "Star Platinum's ultimate",
    body: "Hora Hora Hora Hora Hora Hora Hora Hora Hora Hora Hora Hora"
}


async function postRequest() {
    let request = await fetch(API_URL , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
    const data = await request.json()
    console.log(data)
}

postRequest()

