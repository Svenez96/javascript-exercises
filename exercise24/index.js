function createCounter () {
   let count = 6;

   return {
      increment: function () {
         count += 1;
         return count;
      },

      decrement: function () {
         count -= 1;
         return count;
      }
   }
   
}

const counter = createCounter ()

console.log(counter.increment())
console.log(counter.decrement())

