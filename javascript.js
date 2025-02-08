const searchBtn = document.getElementById('searchBtn');
const searchSection = document.querySelector('.search-section');
const linksSection = document.querySelector('.links-section');
const pacman = document.querySelector('.pacman');
const feed = document.querySelector('.feed');
    
searchBtn.addEventListener('click', () => {
searchSection.classList.add('active');
linksSection.classList.add('pushed');
searchSection.querySelector('input').focus();
    
if (pacman.classList.contains('exit')) {
    pacman.classList.remove('exit');
    feed.classList.remove('exit');
}
    pacman.classList.toggle('active');
});
    
document.addEventListener('click', (e) => {
    if (!searchSection.contains(e.target) && e.target !== searchBtn && searchSection.classList.contains('active')) {
        pacman.classList.remove('active');
        feed.classList.remove('active');
        pacman.classList.add('exit');
        feed.classList.add('exit');
    
        setTimeout(() => {
            searchSection.classList.remove('active');
            linksSection.classList.remove('pushed');
        }, 1800); 
    }
});
    
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', () => {
        button.style.transform = '';
    });
});