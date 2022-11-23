// put your globals here - hint: select elements from the HTML


// dont' forget to add event listeners to teh buttons

function countWords() {
  // your code here
  // call printData
  let words = document.getElementById("text-area").value.split(" ");
  // remove all empty strings
  words = words.filter(word => word !== "");
  printData(words.length, "wordCountInput");
}

function findWords() {
  // put your local variable for the empty array here
  // remainder of your code follows
  // call printData

  let words = document.getElementById("text-area").value.split(" ");
  words = words.filter(word => word !== "");
  let theWordToFind = document.getElementById("findWordInput").value;
  let foundWords = [];
  words.forEach(word => {
    // if word contains theWordToFind
    if (word.includes(theWordToFind)) {
      foundWords.push(word);
    }
  });
  printData(foundWords, "wordFoundInput");
}

// change param1 and param2 to identifiers that make sense
function printData(param1, param2) {
  if (typeof param1 === "number") {
    if(param1 <= 1) {
      document.getElementById(param2).value = param1 + " word";
    }
    else{
      document.getElementById(param2).value = param1 + " words";
    }
  }else if(typeof param1 === "object") {
    if(param1.length <= 1) {
      document.getElementById(param2).value = param1.length + " instance";
    }
    else{
      document.getElementById(param2).value = param1.length + " instances";
    }
  }
}
