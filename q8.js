const sumEvens = (numbers) => {
    return numbers.reduce((sum, num) => {
      if (num % 2 === 0) {
        return sum + num;
      }
      return sum;
    }, 0);
  };
  
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sumOfEvens = sumEvens(numbersArray);
  
  console.log('Numbers Array:', numbersArray);
  console.log('Sum of Even Numbers:', sumOfEvens);
  