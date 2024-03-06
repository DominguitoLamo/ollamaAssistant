document.addEventListener('mousedown', e => {
    if (e.button !== 2) {
        return false
    }

    console.log('right click event start')
    chrome.runtime.sendMessage({
        selected: window.getSelection().toString()
    },(response) => {
        console.log("Response from background:", response);
    })
})