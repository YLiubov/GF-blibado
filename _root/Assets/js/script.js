// Ждём, пока страница полностью загрузится
document.addEventListener("DOMContentLoaded", function () {
  
  // ГАЛЕРЕЯ
  // Находим большую картинку, которую хотим менять
  const bigImage = document.getElementById("bigNewsImage");

  // Находим все кнопки с маленькими картинками
  const buttons = document.querySelectorAll(".thumbnails button");

  // Для каждой кнопки добавляем обработчик на клик
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Получаем картинку внутри этой кнопки
      const thumbImg = button.querySelector("img");

      // Меняем большую картинку на нажатую
      bigImage.src = thumbImg.src;
    });
  });
});


// МОДАЛКА
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("signupModal");
  const openBtn = document.querySelector("a.signup");
  const closeBtn = document.querySelector(".close");
  const form = document.getElementById("signupForm");

  // Открытие формы
  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  });

  // Закрытие формы
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Валидация формы
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const fields = [
      { id: "fname", message: "Udfyld fornavn" },
      { id: "lname", message: "Udfyld efternavn" },
      { id: "email", message: "Ugyldig email", validate: val => /\S+@\S+\.\S+/.test(val) },
      { id: "password", message: "Mindst 6 tegn", validate: val => val.length >= 6 },
      { id: "repeatPassword", message: "Gentag password", validate: val => val === document.getElementById("password").value }
    ];

    fields.forEach(({ id, message, validate }) => {
      const input = document.getElementById(id);
      const error = document.getElementById(id + "Error");

      if (!input.value.trim() || (validate && !validate(input.value.trim()))) {
        error.textContent = message;
        isValid = false;
      } else {
        error.textContent = "";
      }
    });

    if (isValid) {
      alert("Tak for din tilmelding!");
      modal.style.display = "none";
      form.reset();
    }
  });
});


