function systemMessage(value){
    try {
       if (value.trim().length === 0){
           throw new Error ("System Message Error... You must enter a value.");
       } else {
           console.log(value + ". " + "System Message Logged."); 
       };
    } catch (error) {
        console.error(error);
    } finally {
        console.log("System Message Process Completed.");
    };
};

systemMessage(" ");
systemMessage("Inizialization Complete");