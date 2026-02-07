function nextPage(nextId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    // Show the next page
    document.getElementById(nextId).classList.add('active');
}

function moveButton() {
    const btn = document.getElementById('no-btn');
    // Calculate random position within the screen
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

