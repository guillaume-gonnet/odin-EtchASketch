const container = document.getElementById("container");
const btnSquaresQty = document.getElementById("btnSquaresQty");
btnSquaresQty.addEventListener('click', promptSquares);

createSquares(256);

function createSquares(nbSquares) {
    for (let i = 0; i < nbSquares; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        const flexBasisPercent = (100 / Math.sqrt(nbSquares));
        const flexBasisStr = '' + flexBasisPercent + '%';
        div.style.flexBasis = flexBasisStr;
        div.addEventListener('mouseover', () => {
            if (div.style.backgroundColor === '') {
                div.style.backgroundColor = generateRandomRGBA();
            } else {
                const color = div.style.backgroundColor;

                div.style.backgroundColor = darkenRGBA(color);;
            }
        });
        container.appendChild(div);
    }
}

function promptSquares() {
    let nbSquares = 0;
    while (nbSquares < 1 || nbSquares > 100) {
        nbSquares = prompt("How many squares do you want per side (Max=100)?");
        if (nbSquares === null) return;
    }
    removeAllChildren(container);
    createSquares(nbSquares * nbSquares);
}


function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function generateRandomRGBA() {
    const r = Math.floor(Math.random() * 256).toString();
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = 0.1;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function darkenRGBA(RGBA) {
    const RGBAsplit = RGBA.split(",");
    if (RGBAsplit[3] === undefined) {
        return RGBA;
    }
    const a = 0.1 + parseFloat(RGBAsplit[3].slice(0, -1));
    return `${RGBAsplit[0]}, ${RGBAsplit[1]}, ${RGBAsplit[2]}, ${a})`
}