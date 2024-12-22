function foo(a, b) {
  // Handle null values by providing defaults
  const numA = a === null ? 0 : a; 
  const numB = b === null ? 0 : b; 

  if (typeof numA !== 'number' || typeof numB !== 'number'){
    throw new Error('Invalid input: Inputs must be numbers or null');
  }
  return numA + numB;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo("a", 5)); // throws error
console.log(foo(null, null)); // Output: 0