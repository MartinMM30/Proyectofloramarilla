document.addEventListener('DOMContentLoaded', () => {
    const giftButton = document.getElementById('gift-button');
    const message = document.getElementById('message');
    const giftBoxContainer = document.getElementById('gift-box-container'); 
    const roseContainer = document.getElementById('rose-container');     
    const yellowRose = document.getElementById('yellow-rose');
    const giftBox = document.getElementById('gift-box');                 

    const roseImageUrl = 'Loop Flower GIF.gif'; 
    const giftBoxImageUrl = 'gift.gif'; 
    const songUrl = 'Sparkle ｜ Your Name AMV.mp3';

    const sparklesContainer = document.getElementById('sparkles');

    const mainContainer = document.querySelector('.container'); 

    if (yellowRose) yellowRose.src = roseImageUrl;
    if (giftBox) giftBox.src = giftBoxImageUrl;
    

    if (giftButton) {
        giftButton.addEventListener('click', () => {
            if (giftBoxContainer) giftBoxContainer.classList.add('hidden');
            if (roseContainer) roseContainer.classList.remove('hidden');
            if (message) message.classList.remove('hidden');

            giftButton.disabled = true;
            giftButton.style.backgroundColor = '#ccc';
            giftButton.textContent = '¡Regalo abierto!';

            if (yellowRose) {
                yellowRose.style.transform = 'scale(1.2) rotate(-15deg)';
                yellowRose.style.opacity = '0';
                setTimeout(() => {
                    yellowRose.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
                    yellowRose.style.opacity = '1';
                    yellowRose.style.transform = 'scale(1) rotate(0deg)';
                }, 100);
            }
                 if (sparklesContainer) {
                
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
                  setInterval(createSparkle, 100);
            

                for (let i = 0; i < 30; i++) {
                    setTimeout(createSparkle, Math.random() * 500);
                }
            }

            if (mainContainer) {
        mainContainer.addEventListener('mousemove', (e) => {
            
            if (Math.random() > 0.95) { 
                const shootingStar = document.createElement('div');
                shootingStar.classList.add('shooting-star');
                
                
                const containerRect = mainContainer.getBoundingClientRect();
                shootingStar.style.left = `${e.clientX - containerRect.left}px`;
                shootingStar.style.top = `${e.clientY - containerRect.top}px`;
                
                mainContainer.appendChild(shootingStar); 
               
                shootingStar.addEventListener('animationend', () => shootingStar.remove());
            }
        });
    }
            
            const song = new Audio(songUrl);
            song.volume = 0.01;
            song.play();
        });
    }
});