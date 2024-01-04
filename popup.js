document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").addEventListener("click", function () {
    try {
      var findText = document.getElementById("find").value;
      var replaceText = document.getElementById("replace").value;

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tabId = tabs[0].id;
        chrome.tabs.sendMessage(tabId, { action: 'modify', find: findText, replace: replaceText });
      });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  });
});
