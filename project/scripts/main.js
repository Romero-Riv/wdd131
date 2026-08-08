const intro = document.querySelector("#intro");
const website = document.querySelector("#website");

document
    .querySelector("#connectButton")
    .addEventListener("click", () => {

        intro.style.display = "none";

        website.hidden = false;

    });

document.querySelector("#year").textContent =
new Date().getFullYear();