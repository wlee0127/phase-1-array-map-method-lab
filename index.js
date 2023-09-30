const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
    let newArr = tutorials.map(splitFunction);
    newArr = newArr.map(upperCase);
    newArr = newArr.map(joinString);
  return newArr;
}

function splitFunction(element) {
  return element.split(" ");
}

function upperCase(element) {
  debugger;
  let subString = element.map((subElement) => {return subElement.charAt(0).toUpperCase()+subElement.slice(1)});
  console.log(subString);
  return subString;
}

function joinString(element){
  return element.join(' ');
}

titleCased()
console.log(tutorials)