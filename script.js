const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const flower = document.getElementById('flower');
const greeting = document.getElementById('greeting');

yesButton.addEventListener('click', () => {
    flower.classList.remove('hidden');
    flower.style.position = 'absolute';
    flower.style.top = '50%';
    flower.style.left = '50%';
    flower.style.transform = 'translate(-50%, -50%)';
});

noButton.addEventListener('click', () => {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});
