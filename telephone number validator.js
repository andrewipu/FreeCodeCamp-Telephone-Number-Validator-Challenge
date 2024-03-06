function telephoneCheck(str) {
    //regex to test str
    let testRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    
    let testStr = testRegex.test(str);
    return testStr;
  }
  
  telephoneCheck("5555555555");