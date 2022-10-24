var add = function(x, y) {
    return new Promise((resolve,reject) => {
      var sum = x + y;
        resolve(sum);
        reject(Error("Could not add the two values!"));
     
});
  };
  
  var subtract = function(x, y) {
    return new Promise((resolve, reject) => {
      var sum = x - y;
      if (Number.isInteger(sum)) {
        resolve(sum);
      }
      else {
        reject(Error("Could not subtract the two values!"));
      }
    });
  };
 

const prompt = require("prompt-sync")();

let num_1 = prompt("enter a first number: ")
let num_2 = prompt("enter a second number: ")
let num_1_1 = parseInt(num_1);
let num_2_2 = parseInt(num_2);

  
  add(num_1_1,num_2_2)   //promises chain
    .then((added) => {
      return subtract(added, 3);
    })

    .then((subtracted) => {
      return add(subtracted, 5);
    })
    .then((added) => {
      return added * 7;    
    })
    .then((result) => {
      console.log("My result is ", result);
    })
    .catch((err) => {
      console.log(err);
    });
  