const reverseNumber = (number) => {
    const reversedString = number.toString().split('').reverse().join('');
    return parseInt(reversedString);
  };
  
  const givenNumber = 12243;
  const reversedNumber = reverseNumber(givenNumber);
  
  console.log(`Given Number: ${givenNumber}`);
  console.log(`Reversed Number: ${reversedNumber}`);
  