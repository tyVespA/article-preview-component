const popupMobile = document.querySelector(".card--popup-mobile")
const popupDesktop = document.querySelector(".popup-with-arrow")

const shareOne = document.querySelector(".card--text--authorInfo--share")
const shareTwo = document.querySelector(".card--popup-mobile-shareBtn")

shareOne.addEventListener("click", () => {
   popupMobile.classList.remove("card--popup-mobile-display")
   popupMobile.classList.add("slide-up");
   popupMobile.classList.remove("slide-down");

   popupDesktop.classList.toggle("popup-with-arrow-display")
})

shareTwo.addEventListener("click", () => {
   popupMobile.classList.add("card--popup-mobile-display")
   popupMobile.classList.add("slide-down");

   popupDesktop.classList.toggle("popup-with-arrow-display")
})