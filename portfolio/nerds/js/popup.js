  var link = document.querySelector(".button-modal");
  var popup = document.querySelector(".modal");
  var close = popup.querySelector(".modal-close");

  var form = popup.querySelector("form");

  var user_name = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");

  var message = popup.querySelector("[name=message]");

  var storage = localStorage.getItem("user_name");
  var storage2 = localStorage.getItem("email");

  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    user_name.focus();
    if (storage) {
      user_name.value = storage;
      email.focus();
    } else {
      user_name.focus();
    }
    if (storage2) {
      email.value = storage2;
      message.focus();
    } else {
      user_name.focus();
    }
  });

  form.addEventListener("submit", function(evt) {
    if (!user_name.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      localStorage.setItem("user_name", user_name.value);
      localStorage.setItem("email", email.value);
    }
  });

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
