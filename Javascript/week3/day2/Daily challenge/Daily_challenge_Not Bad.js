let sentence = "The movie is not that bad, I like it";

let wordNot = sentence.indexOf("not");

let wordBad = sentence.indexOf("bad");

if (wordNot < wordBad && wordNot !== -1 && wordBad !== -1) {
    let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    console.log(newSentence);
} else {
    console.log(sentence);
}

