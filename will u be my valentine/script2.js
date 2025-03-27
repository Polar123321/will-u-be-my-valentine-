// Função para criar confetes de forma aleatória
function criarConfete() {
    const confete = document.createElement('div');
    confete.classList.add('confete');

    // Definir a cor aleatória do confete
    const cores = ['#FF5733', '#33FF57', '#5733FF', '#FFD700', '#FF1493'];
    confete.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];

    // Definir posição inicial aleatória
    const largura = Math.random() * window.innerWidth;
    confete.style.left = `${largura}px`;

    // Adicionar o confete à página
    document.querySelector('.confetes').appendChild(confete);

    // Remover o confete após a animação
    setTimeout(() => {
        confete.remove();
    }, 3000);
}

// Função para disparar os confetes quando a página carregar
window.onload = () => {
    setInterval(criarConfete, 100); // Criar confetes a cada 100ms
};