const tabsBtn = document.querySelectorAll(".tabs_nav button");
const tabsItem = document.querySelectorAll(".tabs-item");

// щою скрити таби
function hideTabs() {
  tabsItem.forEach((item) => item.classList.add("hide"));
  tabsBtn.forEach((item) => item.classList.remove("active"));
}
// той таб на який ми клікнули ( active )
function showTab(index) {
  tabsItem[index].classList.remove("hide");
  tabsBtn[index].classList.add("active");
}
// Обробник подій
hideTabs();
showTab(0);
tabsBtn.forEach((btn, index) =>
  btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
  })
);

// anchors якір силок
const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach((anc) => {
  anc.addEventListener("click", function (event) {
    event.preventDefault();

    const id = anc.getAttribute("href");
    const element = document.querySelector(id);

    window.scroll({
      top: element.offsetTop - 74,
      behavior: "smooth",
    });
  });
});
