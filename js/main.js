(function ($) {
    "use strict";    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('fixed-top').css('padding', '0');
        } else {
            $('.nav-bar').removeClass('fixed-top').css('padding', '0px 90px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'rotateOutUpRight',
        animateIn: 'rotateInDownLeft',
        items: 1,
        autoplay: true,
        smartSpeed: 5000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    //language toggle

    document.addEventListener('DOMContentLoaded', function () {
  const io = new IntersectionObserver((entries) => { entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); } }); }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
  const imgs = Array.from(document.querySelectorAll('.gallery-item img')).map(i => i.src);
  let currentIndex = 0;
  function openLightbox(index) {
    currentIndex = index;
    document.getElementById('lightboxImage').src = imgs[currentIndex];
    document.getElementById('lightboxCaption').textContent = document.querySelectorAll('.gallery-item')[currentIndex].dataset.caption || '';
    const modal = new bootstrap.Modal(document.getElementById('lightboxModal'));
    modal.show();
  }
  document.getElementById && document.getElementById('galleryGrid') && document.getElementById('galleryGrid').addEventListener('click', function (e) {
    const it = e.target.closest('.gallery-item'); if (!it) return;
    const items = Array.from(document.querySelectorAll('.gallery-item')); const idx = items.indexOf(it);
    if (idx >= 0) openLightbox(idx);
  });
  document.querySelectorAll('.nav-arrow').forEach(el => el.addEventListener('click', function () {
    if (el.classList.contains('left')) { currentIndex = (currentIndex - 1 + imgs.length) % imgs.length; } else { currentIndex = (currentIndex + 1) % imgs.length; }
    const lb = document.getElementById('lightboxImage'); lb.style.opacity = 0; setTimeout(() => { lb.src = imgs[currentIndex]; lb.style.opacity = 1; document.getElementById('lightboxCaption').textContent = document.querySelectorAll('.gallery-item')[currentIndex].dataset.caption || ''; }, 200);
  }));
  document.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') { document.querySelector('.nav-arrow.left') && document.querySelector('.nav-arrow.left').click(); } if (e.key === 'ArrowRight') { document.querySelector('.nav-arrow.right') && document.querySelector('.nav-arrow.right').click(); } });
  const mar = document.querySelector('.marquee'); if (mar) { mar.addEventListener('mouseover', () => mar.style.animationPlayState = 'paused'); mar.addEventListener('mouseout', () => mar.style.animationPlayState = 'running'); }
  const dv = (n) => { const d = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']; return String(n).split('').map(ch => d[ch] !== undefined ? d[ch] : ch).join(''); }
  document.querySelectorAll('.counter').forEach(c => { const num = c.dataset.num || '0'; c.querySelector('.num').textContent = dv(num); });
  const toggle = document.getElementById('themeToggle');
  toggle && toggle.addEventListener('click', function () {
    const cur = document.documentElement.getAttribute('data-theme');
    if (cur === 'dark') { document.documentElement.removeAttribute('data-theme'); localStorage.setItem('theme', 'light'); } else { document.documentElement.setAttribute('data-theme', 'dark'); localStorage.setItem('theme', 'dark'); }
  });
  const saved = localStorage.getItem('theme'); if (saved === 'dark') { document.documentElement.setAttribute('data-theme', 'dark'); }
});

    
})(jQuery);

