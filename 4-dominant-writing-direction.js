const SCRIPTS = require('./includes/scripts.js');


// require('./includes/scripts.js') // include the scripts used by the chapter

function dominantDirection(text) {
    // Your code here.
    let charCodeList = []
    let directionList = []
    for(let i = 0; i < text.length; i++) {
      charCodeList.push(text.codePointAt(i))
    }

    for(const script of SCRIPTS) {
      if(script.ranges.some(([from,to]) => {return code >= from && code < to})) {
        directionList.push(script.direction)
      }
    }
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl