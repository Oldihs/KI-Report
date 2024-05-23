document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navbarContainer = document.getElementById('navbar-container');

    // Toggle sidebar on menu icon click
    menuIcon.addEventListener('click', function() {
        navbarContainer.classList.toggle('active');
    });

    // Close sidebar on close icon click
    closeIcon.addEventListener('click', function() {
        navbarContainer.classList.remove('active');
    });

    // Close sidebar when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!navbarContainer.contains(event.target) && !menuIcon.contains(event.target)) {
            navbarContainer.classList.remove('active');
        }
    });

    // Close sidebar when a nav-link is clicked
    const navLinks = document.querySelectorAll('.nav-link a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarContainer.classList.remove('active');
        });
    });
});
