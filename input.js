function initInputBox() {
    const box = initBox()
    const buttons = initButtons()
    const nameInput = initNameInput()

    box.appendChild(buttons)
    box.appendChild(nameInput)

    document.body.appendChild(box)
}

function initBox() {
    const dom = document.createElement('div')
    dom.id = 'ollama-input'
    fillStyle(dom, {
        'padding': '10px',
        'backgroundColor': 'black',
        'fontSize': '18px',
        'color': 'white',
        'width': '300px',
        'display': 'block',
        'position': 'fixed',
        'top': '0px',
        'left': '0px',
        'z-index': '9999',
        'border-radius': '5px',
        'border': 'none'
    })

    return dom
}

function initButtons() {
    const buttonsBox = document.createElement('div')
    fillStyle(buttonsBox, {
        'display': 'flex',
        'gap': '3px',
        'justify-content': 'right',
        'margin-bottom': '6px',
    })
    const saveButton = document.createElement('button')
    saveButton.id = 'ollama-save-input'
    saveButton.textContent = 'save and run'
    const runButton = document.createElement('button')
    runButton.id = 'ollama-run-input'
    runButton.textContent = 'run'

    buttonsBox.appendChild(saveButton)
    buttonsBox.appendChild(runButton)

    return buttonsBox
}

function initNameInput() {
    const box = document.createElement('div')
    fillStyle(box, {
        'padding': '0 5px',
    })
    box.textContent = 'Name:'
    const input = document.createElement('input')
    fillStyle(input, {
        'display': 'block',
        'width': '100%',
        'margin-bottom': '6px',
        'border-radius': '5px'
    })
    input.id = 'ollama-name-prompt'
    box.appendChild(input)

    const textArea = initPromptArea()
    box.appendChild(textArea)
    return box
}

function initPromptArea() {
    const textarea = document.createElement('textarea')
    textarea.id = 'ollama-custom-prompt'
    textarea.rows = 2
    textarea.placeholder = 'Prompt Input'
    fillStyle(textarea, {
        'display': 'block',
        'width': '100%',
        'border-radius': '5px'
    })
    return textarea
}

function fillStyle(dom, styles) {
    for (const [attribute, value] of Object.entries(styles)) {
        dom.style[attribute] = value
    }
}

initInputBox()