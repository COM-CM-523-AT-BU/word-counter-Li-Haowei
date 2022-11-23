// put your globals here - hint: select elements from the HTML


// dont' forget to add event listeners to teh buttons

function countWords() {
  // your code here
  // call printData
  let words = document.getElementById("text-area").value;
  let wordCount = words.split(" ").length;
  printData(wordCount, "wordCountInput");
}

function findWords() {
  // put your local variable for the empty array here
  // remainder of your code follows
  // call printData

  let words = document.getElementById("text-area").value;
  words = words.split(" ");
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
  document.getElementById(param2).value = param1;
}
