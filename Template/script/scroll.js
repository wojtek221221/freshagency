window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progress-bar');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;
    
    progressBar.style.width = `${scrollPercentage}%`;
});
