let highLightText

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.selected) {
        console.log("selected received from content:", request);
        // Perform any necessary actions here
        highLightText = request.selected
        // Send a response back to the popup
        setTimeout(()=> {
          sendResponse({ received: true })
        }, 1)
    }

    if (request.type === 'ollamaCall') {
        const result = await requestLLM()
        sendResponse(result)
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
    const modelName = await getModelName()
    console.log('model name:', modelName)
    console.log("id: ", info.menuItemId)
    console.log("highlightText: ", highLightText)
    if (info.menuItemId !== 'custom prompt') {
        const result = requestLLM(modelName, `${highLightText}\n${info.menuItemId}`)
    }
})

async function requestLLM(modelName, promptText) {
    return Promise.resolve({
        code: 0,
        data: `${modelName}-${promptText}`
    })
}

async function getModelName() {
    const storage = await chrome.storage.sync.get(["modelName"])
    const modelName = storage.modelName ? storage.modelName : 'qwen:7b'
    return modelName
}