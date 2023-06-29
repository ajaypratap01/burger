document.addEventListener("DOMContentLoaded", function() {
    let option = document.querySelector("#second-menu");
    let menu = document.querySelector("#menu");
  
    menu.addEventListener("click", function() {
      if (option.style.display === "flex") {
        option.style.display = "none";
      } else {
        option.style.display = "flex";
      }
    });
  });
  