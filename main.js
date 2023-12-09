let inputText = document.querySelector(".input-text");
let wordCount = document.querySelector(".word-count");
let characterCount = document.querySelector(".character-count");
let sentenceCount = document.querySelector(".sentence-count");
let paragraphCount = document.querySelector(".Paragraphs-count");

inputText.addEventListener("input", () => {
  
  characterCount.textContent = inputText.value.length;
  //characterCount.textContent = inputText.value.replace(/\s+/g, '').length;

  let textTrim = inputText.value.trim();

  wordCount.textContent = textTrim.split(/\s+/).filter((item)=> item).length;

  sentenceCount.textContent = textTrim.split(".").filter((item) => item).length;

  paragraphCount.textContent = textTrim.split("\n\n").filter((item) => item).length;

});