// render ollama tabbar
function renderOllamaTab() {
    const tab = document.createElement("ollama-bar")
    document.body.appendChild(tab)

    // no highlight case
    document.addEventListener("selectionchange", () => {
        if (getSelectedText().length === 0) {
          tab.setAttribute()
        }
    })
}

function getSelectedText() {
    window.getSelection().toString()
}

document.addEventListener("click", () => {
  if (getSelectedText().length > 0) {
    showOllamaTab(getTabPosition());
  }
});


function getMarkerPosition() {
  const rangeBounds = window
    .getSelection()
    .getRangeAt(0)
    .getBoundingClientRect();
  return {
    // Substract width of marker button -> 40px / 2 = 20
    left: rangeBounds.left + rangeBounds.width / 2 - 20,
    top: rangeBounds.top - 30,
    display: "flex",
  };
}

renderOllamaTab()

document.addEventListener('mousedown', e => {
    if (e.button !== 2) {
        return false
    }

    console.log('right click event start')
    chrome.runtime.sendMessage({
        selected: window.getSelection().toString()
    },(response) => {
        console.log("Response from background:", response);
        return true
    })
})

