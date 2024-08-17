const button = document.querySelector(".btn-modal");
const backdrop = document.querySelector(".modal-backdrop");
button.addEventListener("click", toggleModal);
backdrop.addEventListener("click", (e) => {
  const target = e.target.closest(".btn-close-modal");
  if (!target) {
    return;
  }
  toggleModal();
});
function toggleModal() {
  backdrop.classList.toggle("is-open");
}

// // .visually-hidden {
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   margin: -1px;
//   border: 0;
//   padding: 0;
//   white-space: nowrap;
//   clip-path: inset(100%);
//   clip: rect(0 0 0 0);
//   overflow: hidden;
// // }