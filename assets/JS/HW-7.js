
  function printNumbers (from, to) {
    let n = from;
    setTimeout(function step(){
        console.log(n);
        if (n < to) {
            setTimeout(step, 2000);
        }
        n++;
    }, 2000);
  }
  printNumbers(2, 5);
  
 