"use strict";

const choices = document.getElementById("textArea");
const tag = document.querySelector(".tags");

// focuses directly on textArea when page open/loads
choices.focus();

choices.addEventListener("keydown", (e) => {
  createTags(choices.value);

  if (e.key === "Enter") {

    setTimeout(() => {
      console.log(e.target.value = "");
    }, 10);

    randomSelector();
  }
});

const createTags = function (input) {

  const choice = input.split(",").filter(ch => ch.trim() !== "").map(ch => ch.trim());

  tag.innerHTML = "";

  choice.forEach((ch) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = ch;
    tag.appendChild(tagEl);
  });
}


const randomSelector = function () {
  const times = 30;

  // highlighting random tags for 100ms
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  // stops the above interval and highlight a random tag
  setTimeout(() => {

    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}