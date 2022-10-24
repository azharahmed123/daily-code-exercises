function CalculateAdition(x, y, time) {
    let result = 0;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (x < 0) {
          return reject(`${x} is not positve`);
        }
        if (y < 0) {
          return reject(`${y} is not postive`);
        }
        if (time < 500) {
          return reject(`Delay should not be less than 500ms`);
        }
        const sum = x + y;
        console.log(sum);
        return resolve(sum);
      }, time);
    });
  }
  
  // CalculateAdition(5, 10, 1000)
  //   .then((result) =>
  //     CalculateAdition(result, 15, 1000).then((result) =>
  //       CalculateAdition(result, 10, 1000).then((result) =>
  //         console.log(`The sum of all numbers is ${result}`)
  //       )
  //     )
  //   )
  //   .catch((e) => {
  //     return console.log(e);
  //   });
  
  async function addition() {
    try {
      const sum1 = await CalculateAdition(5, 10, 1000);
      const sum2 = await CalculateAdition(sum1, -15, 1000);
      const sum3 = await CalculateAdition(sum2, 10, 1000);
      console.log(`The sum of all numbers is ${sum3}`);
    } catch (e) {
      console.log(`Error occured with ${e}`);
    }
  }
  addition();