// Top Brands scroll functionality
const brandsList = document.querySelector('.brands-list');
const leftChevron = document.querySelector('.chevron.left');
const rightChevron = document.querySelector('.chevron.right');

if (leftChevron && brandsList) {
    leftChevron.addEventListener('click', () => {
        brandsList.scrollBy({ left: -200, behavior: 'smooth' });
    });
}

if (rightChevron && brandsList) {
    rightChevron.addEventListener('click', () => {
        brandsList.scrollBy({ left: 200, behavior: 'smooth' });
    });
}

// Set active class on Home link
document.querySelector('.nav-list a[href="#home"]').classList.add('active');



// Header scroll behavior
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY >= 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");

  if (!toggle || !menu) {
    console.error("Menu elements NOT found");
    return;
  }

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });
});
