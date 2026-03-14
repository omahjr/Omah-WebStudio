
lucide.createIcons();


document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.to('.hero-content', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
    });

    gsap.from('nav', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });


    gsap.to('.project-card', {
        scrollTrigger: {
            trigger: '.project-card',
            start: 'top 85%',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
    });


    gsap.from('#about p', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out'
    });


    gsap.from('#contact .space-y-6 > div', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 75%',
        },
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'back.out(1.7)'
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Account for header height
                behavior: 'smooth'
            });
        }
    });
});


const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button');
        const originalText = submitBtn.innerText;
        
        submitBtn.disabled = true;
        submitBtn.innerText = 'Sending...';
        

        setTimeout(() => {
            submitBtn.innerText = 'Message Sent!';
            submitBtn.classList.remove('bg-[#0F172A]');
            submitBtn.classList.add('bg-green-500');
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerText = originalText;
                submitBtn.classList.add('bg-[#0F172A]');
                submitBtn.classList.remove('bg-green-500');
            }, 3000);
        }, 1500);
    });
}
