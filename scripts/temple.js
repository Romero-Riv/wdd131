// Dynamic footer information
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

// Hamburger navigation menu
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");

  const menuIsOpen = navigation.classList.contains("open");

  menuButton.textContent = menuIsOpen ? "✕" : "☰";
  menuButton.setAttribute("aria-expanded", menuIsOpen);
  menuButton.setAttribute(
    "aria-label",
    menuIsOpen ? "Close navigation menu" : "Open navigation menu"
  );
});