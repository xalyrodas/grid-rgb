let DOM = document.querySelector(".tablero");

for(let j = 0;j<10;j++){
    for (let i= 0;i<10;i++){
    let div = document.createElement('div');
    div.classList.add(`c${i+1}`);

    DOM.appendChild(div);
}
}