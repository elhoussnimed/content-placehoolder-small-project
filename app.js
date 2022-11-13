const card = document.querySelector(".card");

window.addEventListener("load", () => {
  setTimeout(() => {
    card.classList.remove("onload");
  }, 2000);
});
