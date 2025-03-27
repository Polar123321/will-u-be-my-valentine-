function moveNo() {
    const no = document.querySelector(".no");

    // Obter as dimensões do botão .no
    const buttonWidth = no.offsetWidth;
    const buttonHeight = no.offsetHeight;

    // Calcular os novos valores de x e y, limitando o movimento dentro de uma área menor
    let x = Math.floor(Math.random() * 30); // Limite de movimento horizontal (30% da tela)
    let y = Math.floor(Math.random() * 30); // Limite de movimento vertical (30% da tela)

    // Aplicar o novo transform, movendo o botão para uma posição aleatória, mas dentro de uma área menor
    no.style.transform = `translate(${x}vw, ${y}vh)`;
}

document.querySelector(".no").addEventListener("mouseover", moveNo);
document.querySelector(".no").addEventListener("click", moveNo);