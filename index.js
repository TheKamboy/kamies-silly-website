/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("SMYW 💔");

// Website Redirects

function projects() {
  location.replace("/projects/index.html");
}

function home_page() {
  location.replace("/index.html");
}

function credits_page() {
  location.replace("/credits/index.html");
}

function fanart_page() {
  location.replace("/fanart/index.html");
}

// Offsite Redirects

function blog_website() {
  // location.replace("https://kamies-blog.netlify.app/")
  window.open("https://kamies-blog.netlify.app", "_blank").focus();
}

function source_code_website() {
  // location.replace("https://github.com/TheKamboy/kamies-silly-website");
  window
    .open("https://github.com/TheKamboy/kamies-silly-website", "_blank")
    .focus();
}
