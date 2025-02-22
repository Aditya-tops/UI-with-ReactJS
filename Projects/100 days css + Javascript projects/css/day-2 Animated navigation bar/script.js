const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    sidebar.classList.toggle("menu-open");
});

closeBtn.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    sidebar.classList.remove("menu-open");
});
