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