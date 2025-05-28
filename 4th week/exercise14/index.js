function numeroPari() {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(Math.floor(Math.random() * 100) * 2 ); 
        }, 2000);
      });
    }

function numeroDispari() {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(Math.floor(Math.random() * 100) * 2 + 1 ); 
        }, 1000);
      });
    }

Promise.race([numeroPari(), numeroDispari()])

.then(result => console.log(result))