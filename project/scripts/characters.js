/* ==========================================
   CHARACTER DATA
========================================== */

const characters = [

    {
        name: "Solid Snake",
        codename: "Solid Snake",
        image: "images/solidsnake.jpg",
        occupation: "Soldier",
        affiliation: "FOXHOUND",
        appearance: "Metal Gear",
        status: "Active",
        description:
            "Solid Snake is a legendary soldier and the protagonist of several Metal Gear missions. He is known for his stealth, tactical skills, and ability to complete seemingly impossible missions."
    },

    {
        name: "Big Boss",
        codename: "Naked Snake",
        image: "images/bigboss.jpg",
        occupation: "Soldier",
        affiliation: "FOX",
        appearance: "Metal Gear Solid 3",
        status: "Deceased",
        description:
            "Big Boss is one of the most important soldiers in the Metal Gear timeline. His actions helped shape the events of the entire series."
    },

    {
        name: "Revolver Ocelot",
        codename: "Ocelot",
        image: "images/ocelot.jpg",
        occupation: "Soldier",
        affiliation: "FOXHOUND",
        appearance: "Metal Gear Solid 3",
        status: "Deceased",
        description:
            "Revolver Ocelot is a skilled gunslinger and intelligence operative who plays an important role throughout the Metal Gear series."
    },

    {
        name: "Otacon",
        codename: "Hal Emmerich",
        image: "images/otacon.jpg",
        occupation: "Engineer",
        affiliation: "Philanthropy",
        appearance: "Metal Gear Solid",
        status: "Active",
        description:
            "Otacon is a brilliant engineer and scientist who becomes one of Solid Snake's closest allies."
    },

    {
        name: "The Boss",
        codename: "The Joy",
        image: "images/boss.jpg",
        occupation: "Soldier",
        affiliation: "United States",
        appearance: "Metal Gear Solid 3",
        status: "Deceased",
        description:
            "The Boss was a legendary soldier and mentor to Naked Snake. Her legacy has a major influence on the events of the Metal Gear timeline."
    },

    {
        name: "Venom Snake",
        codename: "Venom Snake",
        image: "images/venomsnake.jpg",
        occupation: "Soldier",
        affiliation: "Diamond Dogs",
        appearance: "Metal Gear Solid V: The Phantom Pain",
        status: "Deceased",
        description:
            "Venom Snake is a skilled soldier who leads the Diamond Dogs while pursuing those responsible for the destruction of Mother Base."
    }

];


/* ==========================================
   HTML ELEMENTS
========================================== */

const characterItems =
    document.querySelectorAll("#characterList li");

const characterImage =
    document.querySelector("#characterImage");

const characterName =
    document.querySelector("#characterName");

const characterCodename =
    document.querySelector("#characterCodename");

const characterOccupation =
    document.querySelector("#characterOccupation");

const characterAffiliation =
    document.querySelector("#characterAffiliation");

const characterAppearance =
    document.querySelector("#characterAppearance");

const characterStatus =
    document.querySelector("#characterStatus");

const characterDescription =
    document.querySelector("#characterDescription");


/* ==========================================
   DISPLAY CHARACTER
========================================== */

function displayCharacter(index) {

    const character = characters[index];

    characterImage.src = character.image;

    characterImage.alt = character.name;

    characterName.textContent = character.name;

    characterCodename.textContent =
        character.codename;

    characterOccupation.textContent =
        character.occupation;

    characterAffiliation.textContent =
        character.affiliation;

    characterAppearance.textContent =
        character.appearance;

    characterStatus.textContent =
        character.status;

    characterDescription.textContent =
        character.description;
}


/* ==========================================
   CHARACTER SELECTION
========================================== */

characterItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        /* Remove active state */

        characterItems.forEach(character => {

            character.classList.remove("active");

        });


        /* Add active state */

        item.classList.add("active");


        /* Display selected character */

        displayCharacter(index);

    });

});


/* ==========================================
   LOAD FIRST CHARACTER
========================================== */

displayCharacter(0);


/* ==========================================
   CURRENT YEAR
========================================== */

const year = document.querySelector("#year");

if (year) {

    year.textContent = new Date().getFullYear();

}