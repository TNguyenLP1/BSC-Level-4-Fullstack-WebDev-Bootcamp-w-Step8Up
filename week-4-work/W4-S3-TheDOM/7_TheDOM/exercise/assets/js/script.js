console.log("Hello from script.js");

// What is this?
console.log(window);
// The window object is the global object in the browser. It represents the browser window/tab.
// All global JavaScript functions, variables, and objects are properties of window.


// What is the difference between window and document?
console.log(document);
// The document is a property of the window object. It represents the DOM (Document Object Model) of the 
// web page. It gives you access to the page content, structure, and elements. ----> same as window

// What is the difference between document and document.documentElement?
console.log(window.document);
console.log(document.documentElement);
// This refers to the root element of the document. In HTML, this is the <html> element.
// It contains both the <head> and <body> tags.

// what are the children of the body element?
console.log(document.body.children);
// document.body returns the <body> element. 
// document.body.children is a live HTMLCollection of the element children (not text nodes or comments) 
// inside <body>.
// Note: children only includes elements, not whitespace text nodes.
