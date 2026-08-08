/* ==========================================
   CONTACT FORM
========================================== */

const contactForm =
    document.querySelector("#contactForm");

const formMessage =
    document.querySelector("#formMessage");


/* ==========================================
   FORM SUBMISSION
========================================== */

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name =
            document.querySelector("#name").value;

        const topic =
            document.querySelector("#topic").value;


        /* ==========================================
           CREATE CONFIRMATION MESSAGE
        ========================================== */

        formMessage.textContent =
            `Thank you, ${name}. Your ${topic} message has been received by FOXHOUND.`;

        formMessage.classList.add("show");


        /* Clear the form */

        contactForm.reset();

    });

}


/* ==========================================
   CURRENT YEAR
========================================== */

const year =
    document.querySelector("#year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}