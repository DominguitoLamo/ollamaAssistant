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
        selected: window.getSelection().toString()
    },(response) => {
        console.log("Response from background:", response);
        return true
    })
})
