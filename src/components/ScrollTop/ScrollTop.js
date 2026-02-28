document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".scroll-top");
  if (!btn) return;

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      btn.classList.add("scroll-top--visible");
    } else {
      btn.classList.remove("scroll-top--visible");
    }
  };

  window.addEventListener("scroll", toggleVisibility, { 
    passive: true 
  });
  toggleVisibility();

  btn.addEventListener("click", () => {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  });
});

