let modelName

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.modelName) {
      console.log("Message received in background:", request);
      // Perform any necessary actions here
      modelName = request.modelName
      // Send a response back to the popup
      setTimeout(()=> {
        sendResponse({ received: true })
      }, 1)
    }
    return true
})

chrome.runtime.onInstalled.addListener(()=> {
    const contextItems = getContextItems()
    contextItems.forEach(item => {
        chrome.contextMenus.create({
            title: item,
            contexts: ['selection'],
            id: item
        })
    })
})

function getContextItems() {
    const context = [
        'translate into chinese',
        'summary',
        'decorate',
        'explain meaning',
        'custom prompt'
    ]
    return context
}

function LLMRespShow(selectedText, prompt) {

}