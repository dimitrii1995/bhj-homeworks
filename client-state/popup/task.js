document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("subscribe-modal");
    var closeButton = modal.querySelector(".modal__close");
  
    if (!localStorage.getItem("modalShown")) {
       modal.classList.add("modal_active");
    }
  
    closeButton.addEventListener("click", function () {
       modal.classList.remove("modal_active");
       localStorage.setItem("modalShown", true);
       });
    });