// ollama popup tab
const highlightColor = "rgb(213, 234, 255)"

const template = `
<div id="ollama-tab">
    <button id="ollama-translate">
        <svg t="1709710347033" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2187" ><path d="M810.666667 938.666667H213.333333a128 128 0 0 1-128-128V213.333333a128 128 0 0 1 128-128h597.333334a128 128 0 0 1 128 128v597.333334a128 128 0 0 1-128 128zM213.333333 170.666667a42.666667 42.666667 0 0 0-42.666666 42.666666v597.333334a42.666667 42.666667 0 0 0 42.666666 42.666666h597.333334a42.666667 42.666667 0 0 0 42.666666-42.666666V213.333333a42.666667 42.666667 0 0 0-42.666666-42.666666z" p-id="2188"></path><path d="M640 660.053333H384a128 128 0 0 1-128-128v-85.333333a128 128 0 0 1 128-128h256a128 128 0 0 1 128 128v85.333333a128 128 0 0 1-128 128z m-256-256a42.666667 42.666667 0 0 0-42.666667 42.666667v85.333333a42.666667 42.666667 0 0 0 42.666667 42.666667h256a42.666667 42.666667 0 0 0 42.666667-42.666667v-85.333333a42.666667 42.666667 0 0 0-42.666667-42.666667z" p-id="2189"></path><path d="M512 788.906667a42.666667 42.666667 0 0 1-42.666667-42.666667v-469.333333a42.666667 42.666667 0 0 1 85.333334 0v469.333333a42.666667 42.666667 0 0 1-42.666667 42.666667z" p-id="2190"></path></svg>
    </button>
    <button id="ollama-summary">
    <svg t="1709713452672" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6158"><path d="M865.012831 458.334306a25.573901 25.573901 0 0 0-25.573901 25.573901v437.616196a51.1938 51.1938 0 0 1-51.1938 51.193801H122.597732a51.1938 51.1938 0 0 1-51.1928-51.193801V102.386601a51.1938 51.1938 0 0 1 51.1928-51.192801h407.408494a25.618899 25.618899 0 0 0 0-51.1938H122.596732a102.475597 102.475597 0 0 0-102.475597 102.475597v819.048806a102.475597 102.475597 0 0 0 102.475597 102.475597h665.513404a102.475597 102.475597 0 0 0 102.475597-102.475597V483.775213a25.618899 25.618899 0 0 0-25.6189-25.574901zM981.122842 22.589029a76.767701 76.767701 0 0 0-108.580334 0l-6.103738 6.103738-434.408334 434.408334-39.743292 148.367625 148.367625-39.743292 440.512071-440.467074a76.767701 76.767701 0 0 0 0-108.580334z m-78.550624 114.595076L514.055912 525.700411l-49.455875 13.366426 13.366425-49.454875 387.982329-388.383312 11.895489 11.40551zM315.920425 529.265258h-102.475596a25.618899 25.618899 0 0 0 0 51.1938h102.475596a25.618899 25.618899 0 0 0 0-51.1938z m-137.584088 221.971462a25.573901 25.573901 0 0 0 25.573901 25.618899h502.844394a25.618899 25.618899 0 1 0 0-51.1938H203.910238a25.618899 25.618899 0 0 0-25.573901 25.708896z" fill="#ffffff" p-id="6159"></path></svg>
    </button>
    <button id="ollama-decorate">
    <svg t="1709713542165" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7212"><path d="M1024 102.4c0-23.893333-10.24-47.786667-27.306667-64.853333l-3.413333-3.413334C955.733333-3.413333 897.706667-3.413333 860.16 34.133333L320.853333 532.48c-71.68-17.066667-150.186667 3.413333-208.213333 61.44-75.093333 75.093333-75.093333 160.426667-71.68 208.213333v20.48c0 40.96-23.893333 92.16-30.72 105.813334-6.826667 10.24-6.826667 23.893333-3.413333 34.133333s13.653333 23.893333 27.306666 27.306667c51.2 20.48 102.4 34.133333 153.6 34.133333 88.746667 0 170.666667-34.133333 232.106667-95.573333 51.2-51.2 81.92-116.053333 81.92-177.493334 0-13.653333 0-30.72-3.413333-44.373333L996.693333 167.253333c17.066667-17.066667 27.306667-40.96 27.306667-64.853333M358.4 863.573333c-64.853333 64.853333-153.6 85.333333-249.173333 61.44 10.24-27.306667 20.48-64.853333 20.48-98.986666v-23.893334c0-44.373333-3.413333-95.573333 47.786666-146.773333 54.613333-54.613333 139.946667-54.613333 194.56 0 27.306667 27.306667 40.96 58.026667 40.96 92.16 0 40.96-20.48 81.92-54.613333 116.053333M935.253333 105.813333s-3.413333 0 0 0l-477.866666 512c-6.826667-6.826667-13.653333-17.066667-20.48-23.893333-6.826667-6.826667-17.066667-13.653333-23.893334-20.48l512-477.866667c3.413333-3.413333 6.826667-3.413333 6.826667 0l3.413333 3.413334v6.826666" fill="#ffffff" p-id="7213"></path></svg>
    </button>
    <button id="ollama-explain">
        <svg t="1709710893227" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5184" ><path d="M464 784.352c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48zM512 960C264.96 960 64 759.04 64 512S264.96 64 512 64s448 200.96 448 448-200.96 448-448 448z m0-831.713c-211.584 0-383.713 172.129-383.713 383.713 0 211.552 172.129 383.713 383.713 383.713 211.552 0 383.713-172.16 383.713-383.713 0-211.584-172.161-383.713-383.713-383.713z m0 545.408c-17.665 0-32-14.336-32-31.999v-54.112c0-52.353 39.999-92.352 75.327-127.648 25.887-25.92 52.672-52.672 52.672-74.016 0-53.344-43.072-96.736-95.999-96.736-53.823 0-96 41.536-96 94.56 0 17.664-14.335 31.999-32 31.999s-32-14.336-32-32c0-87.423 71.774-158.559 160-158.559S672 297.28 672 385.92c0 47.904-36.32 84.191-71.424 119.296-27.84 27.776-56.575 56.512-56.575 82.335v54.112c0 17.665-14.336 32.032-32.001 32.032z" p-id="5185"></path></svg>
    </button>
</div>
`

const styled = ({ display = "none", left = 0, top = 0 }) => `
#ollama-tab {
    background-color: black;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    display: ${display};
    left: ${left}px;
    position: fixed;
    top: ${top}px;
    z-index: 9999;
}

#ollama-tab button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    background-color: black;
    border-radius: 5px;
}

#ollama-tab svg {
    width: 20px;
    height: 20px;
    fill: white;
}

#ollama-tab svg:hover {
f   ill: ${highlightColor};
}
`

class OllamaTab extends HTMLElement {

    constructor() {
        super()
        this.render()
        this.addButtonListeners()
    }

    render() {
        this.attachShadow({ mode: "open" })
        const style = document.createElement("style")
        style.textContent = styled({})
        this.shadowRoot.appendChild(style)
        this.shadowRoot.innerHTML += template
    }

    addButtonListeners() {
        const prompts = {
            'ollama-translate' : 'translate into chinese',
            'ollama-summary': 'summary the text',
            'ollama-decorate': 'decorate the text',
            'ollama-explain': 'explain the meaning'
        }

        for (const [domId, tabPrompt] of Object.entries(prompts)) {
            this.shadowRoot.getElementById(domId).addEventListener('click', async() => {
                const selectedText = window.getSelection()
                const llmMsg = `${selectedText}\n${tabPrompt}`
                chrome.runtime.sendMessage({
                    type: 'ollamaCall',
                    data: {
                        text: llmMsg
                    }
                }, (resp) => {
                    console.log('background msg:',resp)

                    if (resp.code === 0) {
                        // show output
                        this.showOutputBox(resp.data)
                    } else {
                        console.error('error from background:', resp.msg)
                    }

                    return true
                })
            })
        }
    }

    showOutputBox(text) {
        const output = document.getElementById('ollama-output')
        if (!output) {
            console.error('not outputBox exist')
            return
        }
        output.textContent = text
        console.log('tab top:',this.tabPosition['top'])
        output.style['top'] = `${this.tabPosition['top'] + 80}px`
        output.style['left'] = `${this.tabPosition['left']}px`
        output.style['display'] = 'block'

        // make tab disappear
        this.setAttribute('tabPosition', JSON.stringify({display: 'none'}))
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "tabPosition") {
          this.styleElement.textContent = styled(this.tabPosition);
        }
      }

    static get observedAttributes() {
        return ["tabPosition"];
    }

    get tabPosition() {
        return JSON.parse(this.getAttribute("tabPosition") || "{}");
      }
    
    get styleElement() {
        return this.shadowRoot.querySelector("style");
    }
}

window.customElements.define("ollama-tab", OllamaTab)


