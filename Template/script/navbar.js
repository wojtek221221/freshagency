const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    if (mobileMenu.style.display === "none" || mobileMenu.style.display === "") {
        mobileMenu.style.display = "block";
    } else {
        mobileMenu.style.display = "none";
    }
});

let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('nav');
    const icon = document.getElementById('icon');
    const scrollThreshold = 100;
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    navbar.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'z-50');

    if (currentScroll > scrollThreshold) {
        navbar.classList.add('transition-all', 'ease-in-out', 'md:bg-background2', 'md:backdrop-blur-[12.5px]', 'h-[85px]', 'w-full', 'pl-[50px]', 'pr-[50px]');
        navbar.classList.remove('mt-5');
        icon.classList.add('hidden');
        navbar.classList.remove('bg-transparent', 'max-w-[1600px]');
    } else {
        navbar.classList.remove('md:bg-background2', 'rounded-full', 'md:backdrop-blur-[12.5px]', 'h-[80px]', 'w-full', 'pl-[50px]', 'pr-[50px]');
        icon.classList.remove('hidden');
        navbar.classList.add('bg-transparent', 'max-w-[1600px]', 'mt-5');
    }
});
