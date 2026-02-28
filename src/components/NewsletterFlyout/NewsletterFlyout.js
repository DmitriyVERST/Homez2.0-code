var flyout = document.getElementById("newsletterFlyout");

if (flyout) {
    var form = document.getElementById("newsletterForm");
    var statusEl = document.getElementById("newsletterStatus");
    var closeBtn = flyout.querySelector(".newsletter-flyout__close");

    function hide() {
        flyout.classList.remove("is-visible");
        sessionStorage.setItem("homez_newsletter_closed", "1");
    }

    setTimeout(function () {
        if (!sessionStorage.getItem("homez_newsletter_closed")) {
            flyout.classList.add("is-visible");
        }
    }, 4000);

    if (closeBtn) closeBtn.addEventListener("click", hide);

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            var email = (form.email && form.email.value || "").trim();
            if (statusEl) {
                if (!email) {
                    statusEl.textContent = "Введите email.";
                    return;
                }
                statusEl.textContent = "Спасибо! Вы подписаны.";
                statusEl.style.color = "green";
            }
            form.reset();
            setTimeout(hide, 1500);
        });
    }
}
