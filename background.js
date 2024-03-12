let highLightText
const OLLAMA_API = `http://127.0.0.1:11434/api/`



chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.selected) {
        // Perform any necessary actions here
        highLightText = request.selected
        // Send a response back to the popup
        setTimeout(()=> {
          sendResponse({ received: true })
        }, 1)
        return true
    }

    if (request.type === 'ollamaCall') {
        setTimeout(()=> {
            new Promise((resolve) => {
                getModelName().then(value => resolve(value))
            }).then(modelName => {
                requestLLM(modelName, request.data.text).then(result => {
                    sendResponse(result)
                }, () => sendResponse({ code: 1, msg: 'ollama call failed' }))
            })
        }, 1)
        return true
    }
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
    // return Promise.resolve({
    //     code: 0,
    //     data: `${modelName}-${promptText}`
    // })
    return postData(`generate`, {
        "model": modelName,
        "prompt":promptText,
        "stream": false
    }).then(async (resp)=> {
        if (resp.ok) {
            const data = await resp.json()
            console.log('resp data:', data)
            return {
                code: 0,
                data: data.response
            }
        } else {
            return {
                code: 1,
                msg: 'http request failed'
            }
        }
    }).catch((e)=> {
        console.error('axios post failed:', e)
        return false
    })
}

async function getModelName() {
    const storage = await chrome.storage.sync.get(["modelName"])
    const modelName = storage.modelName ? storage.modelName : 'qwen:7b'
    return modelName
}

async function postData(api = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(OLLAMA_API + api, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    return response // parses JSON response into native JavaScript objects
  }