const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
  templeName: "Houston Texas",
  location: "Houston, Texas, United States",
  dedicated: "2000, August, 26",
  area: 33000,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
},
{
  templeName: "Gilbert Arizona",
  location: "Gilbert, Arizona, United States",
  dedicated: "2014, March, 2",
  area: 85326,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
},
{
  templeName: "Rexburg Idaho",
  location: "Rexburg, Idaho, United States",
  dedicated: "2008, February, 10",
  area: 57504,
  imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
},

];

const templeContainer = document.querySelector("#temple-cards");
const pageTitle = document.querySelector("#page-title");

const homeButton = document.querySelector("#home");
const oldButton = document.querySelector("#old");
const newButton = document.querySelector("#new");
const largeButton = document.querySelector("#large");
const smallButton = document.querySelector("#small");

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

function displayTemples(templeList) {
  templeContainer.innerHTML = "";

  if (templeList.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No temples were found.";
    message.classList.add("no-results");
    templeContainer.appendChild(message);
    return;
  }

  templeList.forEach((temple) => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    const templeName = document.createElement("h2");
    templeName.textContent = temple.templeName;

    const information = document.createElement("div");
    information.classList.add("temple-information");

    const location = document.createElement("p");
    location.innerHTML =
      `<span class="label">Location:</span> ${temple.location}`;

    const dedication = document.createElement("p");
    dedication.innerHTML =
      `<span class="label">Dedicated:</span> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML =
      `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = `${temple.templeName} Temple`;
    image.loading = "lazy";
    image.width = 400;
    image.height = 250;

    information.appendChild(location);
    information.appendChild(dedication);
    information.appendChild(area);

    card.appendChild(templeName);
    card.appendChild(information);
    card.appendChild(image);

    templeContainer.appendChild(card);
  });
}

function getDedicationYear(temple) {
  return Number(temple.dedicated.split(",")[0]);
}

function changeTempleView(title, templeList, selectedLink) {
  pageTitle.textContent = title;
  displayTemples(templeList);

  document.querySelectorAll("nav a").forEach((link) => {
    link.classList.remove("active");
  });

  selectedLink.classList.add("active");

  navigation.classList.remove("open");
  menuButton.textContent = "☰";
  menuButton.setAttribute("aria-expanded", "false");
}

homeButton.addEventListener("click", (event) => {
  event.preventDefault();
  changeTempleView("Temple Album", temples, homeButton);
});

oldButton.addEventListener("click", (event) => {
  event.preventDefault();

  const oldTemples = temples.filter((temple) => {
    return getDedicationYear(temple) < 1900;
  });

  changeTempleView("Old Temples", oldTemples, oldButton);
});

newButton.addEventListener("click", (event) => {
  event.preventDefault();

  const newTemples = temples.filter((temple) => {
    return getDedicationYear(temple) > 2000;
  });

  changeTempleView("New Temples", newTemples, newButton);
});

largeButton.addEventListener("click", (event) => {
  event.preventDefault();

  const largeTemples = temples.filter((temple) => {
    return temple.area > 90000;
  });

  changeTempleView("Large Temples", largeTemples, largeButton);
});

smallButton.addEventListener("click", (event) => {
  event.preventDefault();

  const smallTemples = temples.filter((temple) => {
    return temple.area < 10000;
  });

  changeTempleView("Small Temples", smallTemples, smallButton);
});

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");

  const menuIsOpen = navigation.classList.contains("open");

  menuButton.setAttribute("aria-expanded", menuIsOpen);

  if (menuIsOpen) {
    menuButton.textContent = "✕";
  } else {
    menuButton.textContent = "☰";
  }
});

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

displayTemples(temples);
