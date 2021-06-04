let wordsArray = [
    "AMOR",
    "XISELA",
    "JAMON",
    "ROMA",
    "OMAR",
    "MORA",
    "ESPONJA",
    "RAMO",
    "JAPONES",
    "ARMO",
    "MOJAN",
    "MARO",
    "ORAM",
    "MONJA",
    "ALEXIS",
  ];
  
  function printWordsWithSameSpellings(wordsArray) {
    // make words in order first.
    let words = wordsArray.map((w) => {
      return w.split("").sort().join("");
    });

    // Find unique elements to iterate.
    let uniqueElements = new Set(words);
    let wordsToFind = Array.from(uniqueElements);

    wordsToFind.forEach(word => {
        let printFindings = "";
        for(i=0; i<=words.length; i++){
            if(word == words[i]){
                printFindings = printFindings + ' ' + wordsArray[i];
            }
        }
        console.log(printFindings)
    });
  }
  printWordsWithSameSpellings(wordsArray);
  