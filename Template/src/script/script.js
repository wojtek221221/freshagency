document.querySelector('a[href="#projekty"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#projekty').scrollIntoView({
        behavior: 'smooth'
    });
});
document.querySelector('a[href="#main"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#main').scrollIntoView({
        behavior: 'smooth'
    });
});
document.querySelector('a[href="#Realizacje"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#Realizacje').scrollIntoView({
        behavior: 'smooth'
    });
});
document.querySelector('a[href="#Opinie"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#Opinie').scrollIntoView({
        behavior: 'smooth'
    });
});