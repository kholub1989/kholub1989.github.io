var link=document.querySelector(".button-modal"),popup=document.querySelector(".modal"),close=popup.querySelector(".modal-close"),form=popup.querySelector("form"),user_name=popup.querySelector("[name=name]"),email=popup.querySelector("[name=email]"),message=popup.querySelector("[name=message]"),storage=localStorage.getItem("user_name"),storage2=localStorage.getItem("email");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),user_name.focus(),storage?(user_name.value=storage,email.focus()):user_name.focus(),storage2?(email.value=storage2,message.focus()):user_name.focus()}),form.addEventListener("submit",function(e){user_name.value&&email.value?(localStorage.setItem("user_name",user_name.value),localStorage.setItem("email",email.value)):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error"))});