/* ==========================================
   GAME DATA
========================================== */

const games = [

    {
        title: "Metal Gear",
        image: "images/mg1.jpg",
        year: 1987,
        platform: "MSX2",
        developer: "Konami",
        genre: "Action",
        rating: "★★★★★",
        description:
            "Solid Snake infiltrates Outer Heaven to destroy the first Metal Gear weapon."
    },

    {
        title: "Metal Gear 2: Solid Snake",
        image: "images/mg2.jpg",
        year: 1990,
        platform: "MSX2",
        developer: "Konami",
        genre: "Action",
        rating: "★★★★★",
        description:
            "Snake returns to stop Metal Gear D and rescue Dr. Marv."
    },

    {
        title: "Metal Gear Solid",
        image: "images/mgs1.jpg",
        year: 1998,
        platform: "PlayStation",
        developer: "Konami",
        genre: "Stealth",
        rating: "★★★★★",
        description:
            "The Shadow Moses Incident begins."
    },

    {
        title: "Metal Gear Solid 2",
        image: "images/mgs2.jpg",
        year: 2001,
        platform: "PlayStation 2",
        developer: "Konami",
        genre: "Stealth",
        rating: "★★★★★",
        description:
            "Raiden infiltrates the Big Shell."
    },

    {
        title: "Metal Gear Solid 3",
        image: "images/mgs3.jpg",
        year: 2004,
        platform: "PlayStation 2",
        developer: "Konami",
        genre: "Stealth",
        rating: "★★★★★",
        description:
            "Naked Snake begins Operation Snake Eater."
    },

    {
        title: "Peace Walker",
        image: "images/pw.jpg",
        year: 2010,
        platform: "PSP",
        developer: "Konami",
        genre: "Stealth",
        rating: "★★★★☆",
        description:
            "Big Boss builds the Militaires Sans Frontières."
    },

    {
        title: "Ground Zeroes",
        image: "images/gz.jpg",
        year: 2014,
        platform: "PlayStation 4",
        developer: "Konami",
        genre: "Stealth",
        rating: "★★★★☆",
        description:
            "The prologue to The Phantom Pain."
    },

    {
        title: "The Phantom Pain",
        image: "images/tpp.jpg",
        year: 2015,
        platform: "PlayStation 4",
        developer: "Konami",
        genre: "Stealth",
        rating: "★★★★★",
        description:
            "Venom Snake seeks revenge after awakening from a coma."
    }

];


/* ==========================================
   HTML ELEMENTS
========================================== */

const listItems =
    document.querySelectorAll("#gameList li");

const gameImage =
    document.querySelector("#gameImage");

const gameTitle =
    document.querySelector("#gameTitle");

const gameYear =
    document.querySelector("#gameYear");

const gamePlatform =
    document.querySelector("#gamePlatform");

const gameDeveloper =
    document.querySelector("#gameDeveloper");

const gameGenre =
    document.querySelector("#gameGenre");

const gameRating =
    document.querySelector("#gameRating");

const gameDescription =
    document.querySelector("#gameDescription");

const favoriteButton =
    document.querySelector("#favoriteButton");

const year =
    document.querySelector("#year");


/* ==========================================
   FAVORITES FROM LOCAL STORAGE
========================================== */

let favoriteGames =
    JSON.parse(localStorage.getItem("favoriteGames")) || [];


/* ==========================================
   DISPLAY GAME
========================================== */

function displayGame(index) {

    const game = games[index];

    gameImage.src = game.image;

    gameImage.alt = game.title;

    gameTitle.textContent =
        game.title;

    gameYear.textContent =
        game.year;

    gamePlatform.textContent =
        game.platform;

    gameDeveloper.textContent =
        game.developer;

    gameGenre.textContent =
        game.genre;

    gameRating.textContent =
        game.rating;

    gameDescription.textContent =
        game.description;

    updateFavoriteButton(game.title);

}


/* ==========================================
   UPDATE FAVORITE BUTTON
========================================== */

function updateFavoriteButton(title) {

    if (favoriteGames.includes(title)) {

        favoriteButton.textContent =
            "Remove from Favorites";

    } else {

        favoriteButton.textContent =
            "Add to Favorites";

    }

}


/* ==========================================
   SAVE FAVORITE
========================================== */

function saveFavorite(title) {

    if (favoriteGames.includes(title)) {

        favoriteGames =
            favoriteGames.filter(
                game => game !== title
            );

    } else {

        favoriteGames.push(title);

    }

    localStorage.setItem(
        "favoriteGames",
        JSON.stringify(favoriteGames)
    );

    updateFavoriteButton(title);

}


/* ==========================================
   GAME SELECTION
========================================== */

listItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        listItems.forEach(game => {

            game.classList.remove("active");

        });

        item.classList.add("active");

        displayGame(index);

    });

});


/* ==========================================
   FAVORITE BUTTON
========================================== */

if (favoriteButton) {

    favoriteButton.addEventListener("click", () => {

        const selectedGame =
            gameTitle.textContent;

        saveFavorite(selectedGame);

    });

}


/* ==========================================
   LOAD FIRST GAME
========================================== */

displayGame(0);


/* ==========================================
   CURRENT YEAR
========================================== */

if (year) {

    year.textContent =
        new Date().getFullYear();

}