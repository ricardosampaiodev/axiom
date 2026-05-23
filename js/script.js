const btn = document.querySelector("#menu-mobile");
const sidebar = document.querySelector("#menu-sidebar");
const overlay = document.querySelector("#menu-overlay");

function toggleMenu() {
    const opened = btn.classList.toggle("opened");

    sidebar.classList.toggle("opened");
    overlay.classList.toggle("opened");
    document.body.style.overflow = opened ? "hidden" : "";
}

btn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);