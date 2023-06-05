function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function performArithmeticOperations(a, b) {
    return new Promise(async (resolve, reject) => {
      try {
        // Addition
        await delay(1000);
        const sum = a + b;
        console.log(`Sum: ${sum}`);
  
        // Subtraction
        await delay(1000);
        const difference = a - b;
        console.log(`Difference: ${difference}`);
  
        // Multiplication
        await delay(1000);
        const product = a * b;
        console.log(`Product: ${product}`);
  
        // Division
        await delay(1000);
        if (b === 0) {
          throw new Error("Cannot divide by zero!");
        }
        const quotient = a / b;
        console.log(`Quotient: ${quotient}`);
  
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
  
  // Usage
  performArithmeticOperations(10, 5)
    .then(() => console.log("All operations completed successfully."))
    .catch(error => console.log(`Error: ${error.message}`));
  