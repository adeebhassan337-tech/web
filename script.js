/* =====================================================
   ARVOELECT - MAIN JAVASCRIPT FILE
   Clean | Modular | Scalable | Safe
===================================================== */

(function () {
    "use strict";

    /* ==========================================
       DOM ELEMENTS
    ========================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-list a");
    const header = document.querySelector(".header");
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-list a");


    /* ==========================================
       MOBILE MENU TOGGLE
    ========================================== */

    function toggleMenu() {
        navMenu.classList.toggle("active");
    }

    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
    }

    /* ==========================================
       CLOSE MOBILE MENU ON LINK CLICK
    ========================================== */

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });


    /* ==========================================
       STICKY HEADER SHADOW ON SCROLL
    ========================================== */

    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
        } else {
            header.style.boxShadow = "0 2px 6px rgba(0,0,0,0.05)";
        }
    }

    window.addEventListener("scroll", handleHeaderScroll);


    /* ==========================================
       ACTIVE NAV LINK ON SCROLL
    ========================================== */

    function setActiveNav() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navItems.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", setActiveNav);


    /* ==========================================
       SMOOTH SCROLL (Fallback Support)
    ========================================== */

    navItems.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                e.preventDefault();
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });


})();
