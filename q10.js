function isDisariumNumber(num) {
    const strNum = num.toString();
    let sum = 0;
    
    for (let i = 0; i < strNum.length; i++) {
      sum += Math.pow(parseInt(strNum[i]), i + 1);
    }
    
    return sum === num;
  }
  
  function printDisariumNumbers(start, end) {
    for (let i = start; i <= end; i++) {
      if (isDisariumNumber(i)) {
        console.log(i);
      }
    }
  }
  
  // Call the function to print Disarium numbers between 1 and 100
  printDisariumNumbers(1, 100);
  