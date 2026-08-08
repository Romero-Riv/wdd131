/* ==========================================
   TIMELINE INTERACTION
========================================== */

const timelineItems =
    document.querySelectorAll(".timeline-content");


timelineItems.forEach(item => {

    item.addEventListener("click", () => {

        // Remove selected class from all events
        timelineItems.forEach(element => {

            element.classList.remove("selected");

        });

        // Select the clicked event
        item.classList.add("selected");

    });

});


/* ==========================================
   CURRENT YEAR
========================================== */

document.querySelector("#year").textContent =
    new Date().getFullYear();