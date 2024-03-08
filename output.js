function initOutputBox() {
    const output = document.createElement('div')
    output.id = 'ollama-output'
    const outputStyle = {
        'padding': '10px',
        'backgroundColor': 'black',
        'fontSize': '18px',
        'color': 'white',
        'width': '350px',
        'display': 'none',
        'position': 'fixed',
        'top': '0px',
        'left': '0px',
        'z-index': '9999',
        'border-radius': '5px',
        'border': 'none'
    }

    for (const [attribute, value] of Object.entries(outputStyle)) {
        output.style[attribute] = value
    }

    document.body.appendChild(output)

    // create event to close outputBox
    document.addEventListener('click', (e) => {
        const target = e.target
        const id = target.id

        if (id !== 'ollama-output') {
            output.style['display'] = 'none'
        }
    })
}

initOutputBox()