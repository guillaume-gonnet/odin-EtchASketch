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
        div.addEventListener('mouseover', () => div.classList.toggle('hovered'));
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