// Get the href attribute of the first link on the page.
document.querySelector("a").href;
document.querySelector("a").getAttribute("href");
// Get the number of links on this page.
const linksCount = document.querySelectorAll("a").length;
// Change the text for all links to be your name.
document.querySelectorAll("a").forEach((node) => {
  node.innerHTML = "Insert Your Name";
});
// Make Craigslist's logo link to http://www.google.com
document
  .querySelector("#logo a")
  .setAttribute("href", "https://www.google.com");

// Make of all the text use the Papyrus font.
document.body.style.fontFamily = "Papyrus";

// STRETCHES:
// 1. Make the event calendar alternate the background colour of each day square like a chess board.

count = 0;
document.querySelectorAll("td").forEach((node) => {
  if (count % 2 == 0) {
    node.style.backgroundColor = "palegreen";
    count += 1;
  } else {
    node.style.backgroundColor = "salmon";
    count += 1;
  }
});

// 2. Remove all p and a nodes that contain the substring "es"

document.querySelectorAll("p, a").forEach((node) => {
  if (node.innerText.includes("es")) {
    let parent = node.parentElement;
    parent.remove(node);
  }
});
