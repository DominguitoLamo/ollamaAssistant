// render ollama tabbar
const ollamaTab = document.createElement("ollama-tab")
document.body.appendChild(ollamaTab)

const setTabPosition = (markerPosition) =>
    ollamaTab.setAttribute(
        "tabPosition",
        JSON.stringify(markerPosition)
    )

const getSelectedText = () => window.getSelection().toString();

document.addEventListener("click", () => {
  if (getSelectedText().length > 0) {
    setTabPosition(getTabPosition())
  }
});

document.addEventListener("selectionchange", () => {
  if (getSelectedText().length === 0) {
    setTabPosition({ display: "none" });
  }
});

function getTabPosition() {
  const rangeBounds = window
    .getSelection()
    .getRangeAt(0)
    .getBoundingClientRect();
  return {
    // Substract width of tab button -> 40px / 2 = 20
    left: rangeBounds.left + rangeBounds.width / 2 - 20,
    top: rangeBounds.top - 40,
    display: "flex",
  };
}

// #################################################

document.addEventListener('mousedown', e => {
    if (e.button !== 2) {
        return false
    }

    console.log('right click event start')
    chrome.runtime.sendMessage({
        selected: window.getSelection().toString(),
        top: e.clientY + 40,
        left: e.clientX
    },(response) => {
        console.log("Response from background:", response);
        return true
    })
})

// resp from background
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log("Received message from background script: ", message)
  if (message.type === "ollama-call") {
    // Handle the message from ollama
    if (message.content.data) {

    }
  } else if (message.type === 'custom-prompt-open') {
      // get selected position
      const rangeBounds = window
      .getSelection()
      .getRangeAt(0)
      .getBoundingClientRect()
      const input = document.getElementById('ollama-input')
      input.style.display = 'block'
      input.style.left = `${ rangeBounds.left }px`
      input.style.top = `${ rangeBounds.top + 40 }px`
  }
})