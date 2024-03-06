function sendModelNameToBackground() {
    const name = document.getElementById('model').value
    chrome.runtime.sendMessage({ modelName: name }, (response) => {
      console.log("Response from background:", response);
    });
}
  
// Call the function to send the message
sendModelNameToBackground()


document.getElementById('model').addEventListener('blur', () => {
    sendModelNameToBackground()
})