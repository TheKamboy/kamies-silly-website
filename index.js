/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("SMYW 💔");

const btn = document.querySelector("button"); // Get the button from the page

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } },
    "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => {
    goto(f.dataset.file, f.dataset.line);
  };
});

// Website Redirects

function projects() {
  location.replace("/projects/index.html")
}

function home_page() {
  location.replace("/index.html")
}

function credits_page() {
  location.replace("/credits/index.html")
}

function fanart_page() {
  location.replace("/fanart/index.html")
}

// Offsite Redirects

function blog_website() {
  location.replace("https://kamies-blog.netlify.app/")
}

function source_code_website() {
  location.replace("https://github.com/TheKamboy/kamies-silly-website")
}