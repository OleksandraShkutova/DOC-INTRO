
let intervalId = null;

  function numberFromTo (from, to) {
    let n = from - 1;
    return function (){
        if (n < to){
            console.log(++n);
        } else {
            intervalId = setInterval(printNumbers, 2000);
            clearInterval(intervalId);
        }
    }
  }
  const printNumbers = numberFromTo(2, 10);
  setInterval(printNumbers, 1000);
 