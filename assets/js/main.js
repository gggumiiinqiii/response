/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
  //间距
  spaceBetween: 35,
  //可以拖动
  grabCursor: true,
  //居中
  centeredSlides: true,
  //大小
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".value__accordion-item");
accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".value__accordion-header");
  accordionHeader.addEventListener("click", () => {
    // 获取上一个打开的
    const openItem = document.querySelector(".accordion-open");
    toggleItem(item);
    //如果上一个打开的和当前不是同一个就关闭
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});
const toggleItem = (item) => {
  const accordionContent = item.querySelector(".value__accordion-content");
  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  //滚动距离
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    // 元素的内容+padding+border
    const sectionHeight = current.offsetHeight;
    // 当前元素距离offsetParent的Top
    const sectionTop = (ectionTop = current.offsetTop - 58);
    const sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";
//previous selected topic
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// we validate if the user previously chose a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});
sr.reveal(
  `.home__title, .popular__container, .subscribe__container, .footer__container`
);
sr.reveal(`.home__description, footer__info`, { delay: 500 });
sr.reveal(`.home__search`, { delay: 600 });
sr.reveal(`.home__value`, { delay: 700 });
sr.reveal(`.home__images`, { delay: 800, origin: "bottom" });
sr.reveal(`.logos__img`, { interval: 100 });
sr.reveal(`.value__images, .contact__content`, { origin: "left" });
sr.reveal(`.value__content, .contact__images`, { origin: "right" });
