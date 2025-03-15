// Animation

const sr = ScrollReveal({
    distance: '65px',
    duration: 1500,
    delay: 200,
    reset: false
});

// project section
sr.reveal('.project-box', { delay: 50, origin: 'left' });

// back to top button logic

document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.querySelector('.back-to-top button');

    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show button when scrolling down
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            document.querySelector('.back-to-top').style.display = 'block';
        } else {
            document.querySelector('.back-to-top').style.display = 'none';
        }
    });
});