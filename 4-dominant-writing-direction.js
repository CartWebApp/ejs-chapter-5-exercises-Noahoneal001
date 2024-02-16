const SCRIPTS = require('./includes/scripts.js');

// I gave people the right to copy this code

// require('./includes/scripts.js') // include the scripts used by the chapter

function dominantDirection(text) {
    // Your code here.
    let output = ``;
    let charCodeList = [];
    let directionList = [];
    let tally = {ltr: 0, rtl:0, ttb:0};
    for(let i = 0; i < text.length; i++) {
      charCodeList.push(text.codePointAt(i));
    };

    charCodeList.forEach((code) => {
      for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
          return code >= from && code < to;
        })) {
          directionList.push(script.direction);
        };
      };
    });

    directionList.forEach((tester) => {
      if(tester == `ltr`) {tally.ltr++}
      else if (tester == `rtl`) {tally.rtl++}
      else if (tester == `ttb`) {tally.ttb++}
    });

    if (tally.ltr > tally.rtl && tally.ltr > tally.ttb) {return `ltr`}
    else if (tally.rtl > tally.ltr && tally.rtl > tally.ttb) {return `rtl`}
    else if (tally.ttb > tally.ltr && tally.ttb > tally.rtl) {return `ttb`}
    else if (tally.rtl == tally.ltr && tally.rtl == tally.ttb) {return `Equal`}
    else if (tally.rtl == tally.ltr) {return `rtl and ltr`}
    else if (tally.rtl == tally.ttb) {return `rtl and ttb`}
    else if (tally.ttb == tally.ltr) {return `ttb and ltr`}

  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl
