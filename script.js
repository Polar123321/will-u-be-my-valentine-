function moveNo() {
    const no = document.querySelector(".no");

    const buttonWidth = no.offsetWidth;
    const buttonHeight = no.offsetHeight;

    let x = Math.floor(Math.random() * 30);
    let y = Math.floor(Math.random() * 30);

    no.style.transform = `translate(${x}vw, ${y}vh)`;
}

document.querySelector(".no").addEventListener("mouseover", moveNo);
document.querySelector(".no").addEventListener("click", moveNo);
