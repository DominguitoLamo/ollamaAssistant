function initInputBox() {
    const box = initBox()
    const buttons = initButtons()
    const nameInput = initNameInput()

    box.appendChild(buttons)
    box.appendChild(nameInput)

    document.body.appendChild(box)

    // create event to close inputBox
    document.addEventListener('click', (e) => {
        const target = e.target
        const id = target.id

        if (id !== 'ollama-input' && !box.contains(target)) {
            box.style['display'] = 'none'

            document.getElementById('ollama-name-prompt').value = ''
            document.getElementById('ollama-custom-prompt').value = ''
        }
    })
}

function initBox() {
    const dom = document.createElement('div')
    dom.id = 'ollama-input'
    fillStyle(dom, {
        'padding': '10px',
        'backgroundColor': '#222831',
        'fontSize': '18px',
        'color': '#EEEEEE',
        'width': '300px',
        'display': 'none',
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

    const buttonStyle = {
        backgroundColor: '#76ABAE'
    }

    fillStyle(saveButton, buttonStyle)
    fillStyle(runButton, buttonStyle)

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
        'border-radius': '5px',
        'color': '#222831'
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
        'border-radius': '5px',
        'color': '#222831'
    })
    return textarea
}

function fillStyle(dom, styles) {
    for (const [attribute, value] of Object.entries(styles)) {
        dom.style[attribute] = value
    }
}

initInputBox()