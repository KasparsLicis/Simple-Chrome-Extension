# Chrome Extension: HTML Modifier

## Purpose
The purpose of this simple Chrome extension is to explore the capabilities and features of Chrome extensions. This project serves as a learning experiment to understand the basics of creating a Chrome extension and how it can interact with web pages.

## Features
- [ ] Basic extension structure
- [ ] Content script to interact with web pages
- [ ] Popup for user interface
- [ ] Permissions and manifest configuration

## Getting Started
Follow the steps below to get started with this Chrome extension:

1. **Clone the Repository:**
   ```bash
   git clone [repository-url]
   cd [repository-name]


2. **Load the Extension:**

- Open Chrome and go to chrome://extensions/.
- Enable "Developer mode" in the top right corner.
- Click "Load unpacked" and select the project directory.

3. **Explore the Extension:**

- Open a webpage and observe how the extension interacts with it.
- Click on the extension icon to access the popup interface.

4. **Example: Writing and Reading from Local Storage**

- In your content script or popup script, you can use the following code to write to local storage:
- And update manifest file with the permission: "permissions": ["storage"],


````javascript
// Example of writing to local storage
var dataToStore = "Hello, this is a sample data!";
chrome.storage.local.set({ keyName: dataToStore }, function () {
  console.log('Data stored successfully!');
});

// Example of reading from local storage
chrome.storage.local.get(['keyName'], function (result) {
  var retrievedData = result.keyName;
  console.log('Retrieved data:', retrievedData);
});

````