document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inquiryForm");
  const status = document.getElementById("formStatus");

  // поля
  const fields = [
    "inquiryType",
    "howToAddress",
    "fullName",
    "email",
    "role",
    "maxPrice",
    "minSize",
  ];

  function setError(fieldId, message) {
    const input = document.getElementById(fieldId);
    if (!input) return;
    const group = input.closest(".form__group");
    if (!group) return;
    const errorSpan = group.querySelector(".form__error");
    if (!errorSpan) return;

    input.classList.add("error");
    errorSpan.textContent = message;
  }

  function clearError(fieldId) {
    const input = document.getElementById(fieldId);
    if (!input) return;
    const group = input.closest(".form__group");
    if (!group) return;
    const errorSpan = group.querySelector(".form__error");
    if (!errorSpan) return;

    input.classList.remove("error");
    errorSpan.textContent = "";
  }

  // проверка одного поля (универсальная)
  function validateField(fieldId) {
    const el = document.getElementById(fieldId);
    if (!el) return true;

    const value = el.value.trim();

    clearError(fieldId);

    // обязательность
    if (!value) {
      setError(fieldId, "Это поле обязательно");
      return false;
    }

    // селекты
    if (el.tagName === "SELECT" && value === "") {
      setError(fieldId, "Выберите вариант из списка");
      return false;
    }

    // email
    if (fieldId === "email" || fieldId === "footerEmail") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        setError(fieldId, "Введите корректный email");
        return false;
      }
    }

    // числа
    if (fieldId === "maxPrice" || fieldId === "minSize") {
      const num = Number(value);
      if (!Number.isFinite(num) || num <= 0) {
        setError(fieldId, "Введите число больше 0");
        return false;
      }
    }

    return true;
  }

  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      status.textContent = "";
      status.classList.remove("error");

      let isValid = true;

      fields.forEach((fieldId) => {
        const ok = validateField(fieldId);
        if (!ok) {
          isValid = false;
        }
      });

      if (!isValid) {
        status.textContent = "Пожалуйста, заполните форму.";
        status.classList.add("error");
        return;
      }

      status.textContent = "Данные успешно отправлены!";
      form.reset();

      fields.forEach((fieldId) => clearError(fieldId));
    });
  }

  // Форма в футере
  const footerForm = document.getElementById("footerForm");
  const footerStatus = document.getElementById("footerFormStatus");

  const footerFields = ["footerName", "footerEmail", "footerMessage"];

  if (footerForm && footerStatus) {
    footerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      footerStatus.textContent = "";
      footerStatus.classList.remove("error");

      let isValid = true;

      footerFields.forEach((fieldId) => {
        const ok = validateField(fieldId);
        if (!ok) {
          isValid = false;
        }
      });

      if (!isValid) {
        footerStatus.textContent = "Проверьте заполнение полей формы.";
        footerStatus.classList.add("error");
        return;
      }

      footerStatus.textContent = "Спасибо! Ваша заявка отправлена.";
      footerForm.reset();

      footerFields.forEach((fieldId) => clearError(fieldId));
    });
  }
});
