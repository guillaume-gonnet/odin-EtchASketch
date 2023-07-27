const container = document.getElementById("container");

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
}
