const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power Laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time Circuits",
        averagerating: 4.6
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor",
        averagerating: 4.4
    },
    {
        id: "jj-1969",
        name: "Warp Equalizer",
        averagerating: 4.8
    }
];

// ==========================================
// Populate Product Select
// ==========================================

const productSelect = document.getElementById("product");

if (productSelect) {

    products.forEach(product => {

        const option = document.createElement("option");

        option.value = product.id;
        option.textContent = product.name;

        productSelect.appendChild(option);

    });

}

// ==========================================
// Footer Information
// ==========================================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

const lastModified = document.getElementById("lastModified");

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

// ==========================================
// Review Counter (review.html only)
// ==========================================

const reviewCount = document.getElementById("reviewCount");

if (reviewCount) {

    let count = Number(localStorage.getItem("reviewCount")) || 0;

    count++;

    localStorage.setItem("reviewCount", count);

    reviewCount.textContent = count;

}