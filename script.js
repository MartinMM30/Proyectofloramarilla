document.addEventListener('DOMContentLoaded', () => {
    // Definiciones de elementos del DOM
    const giftButton = document.getElementById('gift-button');
    const message = document.getElementById('message');
    const giftBoxContainer = document.getElementById('gift-box-container'); 
    const roseContainer = document.getElementById('rose-container');     
    const yellowRose = document.getElementById('yellow-rose');
    const giftBox = document.getElementById('gift-box');                 

    const roseImageUrl = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2VkbGR2dmxycmZkM3V2MnN5Y29zY2Z3cmpzM21mMXAxOWkyZXAwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BKqOqscntEIrm/giphy.gif'; 
    const giftBoxImageUrl = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDVpNWlnaDY3dXRhcHhhaHp0ZDJ2Y3JiYXpxMWlicDVvcTFsdzJ6OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vYUWWJty4qIdW/giphy.gif'; 
    const songUrl = 'Sparkle ｜ Your Name AMV.mp3';

    
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
            
            const song = new Audio(songUrl);
            song.volume = 0.1;
            song.play();
        });
    }
});