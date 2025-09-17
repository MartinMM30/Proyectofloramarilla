document.addEventListener('DOMContentLoaded', () => {
    const giftButton = document.getElementById('gift-button');
    const message = document.getElementById('message');
    const giftBoxContainer = document.getElementById('gift-box-container');
    const roseContainer = document.getElementById('rose-container');
    const yellowRose = document.getElementById('yellow-rose');
    const giftBox = document.getElementById('gift-box');
    const sparklesContainer = document.getElementById('sparkles');
    const mainContainer = document.querySelector('.container');
    
    // Contenedores de mini-flores para decoración
    const miniFlowers = [
        { id: 'mini-flower-1', url: 'Yellow Rose Love Sticker by Ellis D.gif', top: '5%', left: '10%' },
        { id: 'mini-flower-2', url: 'pink gift Sticker by La Fleur Bouquets.gif', top: '15%', right: '15%' },
        { id: 'mini-flower-3', url: 'gif.gif', top: '35%', left: '5%' },
        { id: 'mini-flower-4', url: 'photo GIF.gif', top: '55%', right: '10%' },
        { id: 'mini-flower-5', url: 'Fast Food Rose Sticker by Max bahman - MAX164.gif', top: '75%', left: '15%' },
        { id: 'mini-flower-6', url: 'Yellow Rose Flower Sticker by Farm to Market Bread.gif', top: '85%', right: '5%' }
    ];

    const roseImageUrl = 'Loop Flower GIF.gif';
    const giftBoxImageUrl = 'gift.gif';
    const songUrl = 'Sparkle ｜ Your Name AMV.mp3';

    // Asignar imágenes al inicio
    if (yellowRose) yellowRose.src = roseImageUrl;
    if (giftBox) giftBox.src = giftBoxImageUrl;

    // Función para crear chispas continuas
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        const size = Math.random() * 5 + 2;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparklesContainer.appendChild(sparkle);
        sparkle.addEventListener('animationend', () => sparkle.remove());
    }

    // Función para crear estrellas fugaces
    function createShootingStar(e) {
        if (Math.random() > 0.95) {
            const shootingStar = document.createElement('div');
            shootingStar.classList.add('shooting-star');
            
            const containerRect = mainContainer.getBoundingClientRect();
            shootingStar.style.left = `${e.clientX - containerRect.left}px`;
            shootingStar.style.top = `${e.clientY - containerRect.top}px`;
            
            mainContainer.appendChild(shootingStar);
            
            shootingStar.addEventListener('animationend', () => shootingStar.remove());
        }
    }
    
    // Event listener del botón
    if (giftButton) {
        giftButton.addEventListener('click', () => {
            if (giftBoxContainer) giftBoxContainer.classList.add('hidden');
            if (roseContainer) roseContainer.classList.remove('hidden');
            if (message) message.classList.remove('hidden');

            giftButton.disabled = true;
            giftButton.style.backgroundColor = '#ccc';
            giftButton.textContent = '¡Regalo abierto!';

            // Se crean y muestran los mini-contenedores al hacer clic
            miniFlowers.forEach(flower => {
                const div = document.createElement('div');
                div.classList.add('mini-flower-container');
                div.id = flower.id;

                const img = document.createElement('img');
                img.src = flower.url;
                div.appendChild(img);

                if (flower.top) div.style.top = flower.top;
                if (flower.bottom) div.style.bottom = flower.bottom;
                if (flower.left) div.style.left = flower.left;
                if (flower.right) div.style.right = flower.right;

                document.body.appendChild(div);
            });

            // Animación de la rosa
            if (yellowRose) {
                yellowRose.style.transform = 'scale(1.2) rotate(-15deg)';
                yellowRose.style.opacity = '0';
                setTimeout(() => {
                    yellowRose.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
                    yellowRose.style.opacity = '1';
                    yellowRose.style.transform = 'scale(1) rotate(0deg)';
                }, 100);
            }

            // Iniciar chispas y estrellas
            setInterval(createSparkle, 100);
            mainContainer.addEventListener('mousemove', createShootingStar);

            const song = new Audio(songUrl);
            song.volume = 0.01;
            song.play();
        });
    }
});