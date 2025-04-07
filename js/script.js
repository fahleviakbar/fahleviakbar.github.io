function toggleNavbar() {
    var navbar = document.getElementById("navbar");

    // Toggle the navbar's "open" class
    if (navbar.classList.contains("open")) {
        navbar.classList.remove("open");
    } else {
        navbar.classList.add("open");
    }
}

function closeNavbar() {
    var navbar = document.getElementById("navbar");
    navbar.classList.remove("open"); // Remove the "open" class to hide the navbar
}
