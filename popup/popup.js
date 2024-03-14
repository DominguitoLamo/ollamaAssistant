// model input
function sendModelNameToBackground() {
    const name = document.getElementById('model').value
    chrome.storage.sync.set({ modelName: name })
}

chrome.storage.sync.get(["modelName"]).then(result => {
    if (result.modelName) {
        document.getElementById('model').value = result.modelName
    } else {
        document.getElementById('model').value = 'qwen:7b'
    }
})

document.getElementById('model').addEventListener('blur', () => {
    sendModelNameToBackground()
})

// address input
function sendAddressToBackground() {
    const address = document.getElementById('address').value
    chrome.storage.sync.set({ address: address })
}

chrome.storage.sync.get(["address"]).then(result => {
    if (result.address) {
        document.getElementById('address').value = result.address
    } else {
        document.getElementById('address').value = 'http://127.0.0.1:11434'
    }
})

document.getElementById('address').addEventListener('blur', () => {
    sendAddressToBackground()
})
