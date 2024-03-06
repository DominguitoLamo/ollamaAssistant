// render ollama tabbar
const ollamaTab = document.createElement("ollama-tab");
document.body.appendChild(ollamaTab);

const setMarkerPosition = (markerPosition) =>
    ollamaTab.setAttribute(
        "markerPosition",
        JSON.stringify(markerPosition)
    )

const getSelectedText = () => window.getSelection().toString();

document.addEventListener("click", () => {
  if (getSelectedText().length > 0) {
    setMarkerPosition(getMarkerPosition());
  }
});

document.addEventListener("selectionchange", () => {
  if (getSelectedText().length === 0) {
    setMarkerPosition({ display: "none" });
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

