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

