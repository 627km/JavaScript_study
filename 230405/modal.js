const openBtn = document.querySelector('#open');
const modalBox = document.querySelector('#modal-box');
const close = document.querySelector('#close');


openBtn.addEventListener("click", () => {
  modalBox.classList.toggle("active");
})

close.addEventListener("click", () => {
  modalBox.classList.toggle("active");
})