let highLightText

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.selected) {
        console.log("selected received from content:", request);
        // Perform any necessary actions here
        highLightText = request.selected
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

chrome.contextMenus.onClicked.addListener(async(info) => {
    const storage = await chrome.storage.sync.get(["modelName"])
    const modelName = storage.modelName ? storage.modelName : 'qwen:7b'
    console.log('model name:', modelName)
    console.log("id: ", info.menuItemId)
    console.log("highlightText: ", highLightText)
    if (info.menuItemId !== 'custom prompt') {
        const result = requestLLM(modelName, highLightText, info.menuItemId)
    }
})

function requestLLM(modelName, highLightText, promptText) {
    return `${modelName}-${highLightText}-${promptText}`
}