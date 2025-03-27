function criarConfete() {
    const confete = document.createElement('div');
    confete.classList.add('confete');

    const cores = ['#FF5733', '#33FF57', '#5733FF', '#FFD700', '#FF1493'];
    confete.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];

    const largura = Math.random() * window.innerWidth;
    confete.style.left = `${largura}px`;

    document.querySelector('.confetes').appendChild(confete);

    setTimeout(() => {
        confete.remove();
    }, 3000);
}

window.onload = () => {
    setInterval(criarConfete, 100);
};
