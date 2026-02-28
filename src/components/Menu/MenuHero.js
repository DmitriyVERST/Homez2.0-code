document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const overlay = document.getElementById("navOverlay");

  function openMenu() {
    if (overlay) {
      overlay.classList.add("is-open");
      overlay.setAttribute("aria-hidden", "false");
    }
    if (burger) {
      burger.classList.add("is-active");
      burger.setAttribute("aria-expanded", "true");
    }
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    if (overlay) {
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
    }
    if (burger) {
      burger.classList.remove("is-active");
      burger.setAttribute("aria-expanded", "false");
    }
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    if (overlay && overlay.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (burger) {
    burger.addEventListener("click", toggleMenu);
  }
  if (overlay) {
    const closeBtn = overlay.querySelector(".nav-overlay__close");
    if (closeBtn) {
      closeBtn.addEventListener("click", closeMenu);
    }
    overlay.addEventListener("click", (e) => { 
      if (e.target === overlay) closeMenu(); 
    });
  }
  document.addEventListener("keydown", (e) => { 
    if (e.key === "Escape") closeMenu(); 
  });

  const tabs = document.querySelectorAll("[data-hero-tab]");
  const searchInput = document.querySelector(".hero-search__input");

  const placeholders = {
    all: "Введите город, район или адрес",
    buy: "Поиск объектов для покупки",
    rent: "Поиск объектов для аренды",
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.getAttribute("data-hero-tab");
      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      if (searchInput && placeholders[key]) {
        searchInput.placeholder = placeholders[key];
      }
    });
  });

  const counters = document.querySelectorAll("[data-counter]");

  function animateCounter(el) {
    const target = parseInt(el.getAttribute("data-counter") || "0", 10);
    if (!target) return;

    const duration = 1500;
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * target);
      el.textContent = current.toLocaleString("ru-RU");

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  counters.forEach(animateCounter);
});