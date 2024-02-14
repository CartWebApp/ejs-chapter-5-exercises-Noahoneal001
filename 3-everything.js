function every(array, test) {
    // Your code here.
    for (const i of array) {
      if (test(i) != true) {
        return false
      }
    }
    return true
  }
  
  function everyButUsingTheSomeMethod(array, test) {
    // Your code here.
    return !array.some((element) => !test(element))
  }


  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true

  console.log(``)

  console.log(everyButUsingTheSomeMethod([1, 3, 5], n => n < 10));
  // → true
  console.log(everyButUsingTheSomeMethod([2, 4, 16], n => n < 10));
  // → false
  console.log(everyButUsingTheSomeMethod([], n => n < 10));
  // → true