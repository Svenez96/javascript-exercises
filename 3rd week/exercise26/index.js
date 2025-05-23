function errorsCheck(value){
    try {
        if (typeof value !== "string"){
            throw new Error("The value must be a string");
        } else if (value.trim().length === 0){
            throw new Error("You must insert a value");
        } else {
            console.log("This value is a string")
        }

    } catch (error) {
        console.error(error.message);
    }
    
};

errorsCheck("Carbone")
errorsCheck(12)
errorsCheck("  ")
