function initOutputBox() {
    const output = document.createElement('div')
    output.id = 'ollama-output'
    const outputStyle = {
        'padding': '10px',
        'backgroundColor': 'black',
        'fontSize': '18px',
        'color': 'white',
        'width': '84px',
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
}

initOutputBox()