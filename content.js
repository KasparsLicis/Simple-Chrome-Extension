function replaceStrings(originalString, replacementString) {
  // Create a regular expression dynamically using the originalString and the 'g' flag for global replacement
  var regex = new RegExp(originalString, 'g');

  // Replace all occurrences of originalString with replacementString in the entire document
  document.body.innerHTML = document.body.innerHTML.replace(regex, replacementString);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  replaceStrings(request.find, request.replace);
  
});


