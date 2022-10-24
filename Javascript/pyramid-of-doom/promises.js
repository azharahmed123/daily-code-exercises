function myDisplayer(some) {
    console.log(some);
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    const prompt = require("prompt-sync")();

    const number = prompt("Enter a number: ");
  
  // The producing code (this may take some time)
  console.log(number % 2 == 0);
    if (!(number % 2 == true)) {
      myResolve("even number ..........");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );