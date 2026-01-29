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
  const menuBtn = document.querySelector(".menu-toggle");
  const mobileDrawer = document.querySelector(".mobile-drawer");

  if (menuBtn && mobileDrawer) {
    // Toggle drawer on hamburger click
    menuBtn.addEventListener("click", () => {
      mobileDrawer.classList.toggle("is-open");
      const overlay = document.querySelector(".drawer-overlay");
      if (overlay) {
        overlay.classList.toggle("is-open");
      }
    });

    // Close on close button click
    const closeBtn = mobileDrawer.querySelector(".drawer-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        mobileDrawer.classList.remove("is-open");
        const overlay = document.querySelector(".drawer-overlay");
        if (overlay) {
          overlay.classList.remove("is-open");
        }
      });
    }

    // Close on nav link click
    mobileDrawer.querySelectorAll(".drawer-nav a").forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("is-open");
        const overlay = document.querySelector(".drawer-overlay");
        if (overlay) {
          overlay.classList.remove("is-open");
        }
      });
    });

    // Close on overlay click
    const overlay = document.querySelector(".drawer-overlay");
    if (overlay) {
      overlay.addEventListener("click", () => {
        mobileDrawer.classList.remove("is-open");
        overlay.classList.remove("is-open");
      });
    }

    // Close on clicking outside the drawer
    document.addEventListener("click", (e) => {
      if (!mobileDrawer.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileDrawer.classList.remove("is-open");
        const overlay = document.querySelector(".drawer-overlay");
        if (overlay) {
          overlay.classList.remove("is-open");
        }
      }
    });
  }
});
