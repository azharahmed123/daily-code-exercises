function checker(i) {
    return i !== car_length();
  }
  
  function* idMakerReturn(){
      let index = 0;
      while(index < car_length())
          if (checker(index))
              yield index++;
          else
              return;
  }
  
  function* idMakerBreak(){
      let index = 0;
      while(index < car_length)
          if (checker(index))
              yield index++;
          else
              break;
  }
  
  const a = idMakerReturn();
  const prompt = require("prompt-sync")();
  const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
  //let num_1 = prompt("enter a first number: ")
 function car_length(){
    return cars.length;
  }
 
  for (let i = 0; i < cars.length; i++) { 
    console.log('car id = '+i,a.next());
  } 
  
  
  //const b = idMakerBreak();
 // console.log('1', b.next());
 // console.log('2', b.next());
 // console.log('3', b.next());
  