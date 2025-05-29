async function message(ok) {
    return new Promise((resolve, reject) => {
        if (ok) {
            resolve("This message is from another function")
        } else {
            reject("Can't reach the main function")
        }
    }
    )
};

async function init() {
    try {
        let result = await message(true);
        console.log(result)
    } catch (error) {
        console.error(" Error:", error)
    }
};

init()
