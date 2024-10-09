document.addEventListener('DOMContentLoaded', function() {
    const aboutUsDropdown = document.getElementById('about-us-dropdown');
    const arrowIcon = document.getElementById('arrow-icon');

    arrowIcon.addEventListener('click', function(e) {
        e.preventDefault();
        // Toggle the display of the dropdown menu
        if (aboutUsDropdown.style.display === 'block') {
            aboutUsDropdown.style.display = 'none';
            arrowIcon.classList.remove('rotated');
        } else {
            aboutUsDropdown.style.display = 'block';
            arrowIcon.classList.add('rotated');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutUsDropdown = document.getElementById('about-us-dropdown');
    const arrowIcon2 = document.getElementById('arrow-icon2');

    arrowIcon2.addEventListener('click', function(e) {
        e.preventDefault();

        // Toggle the dropdown visibility
        aboutUsDropdown.classList.toggle('show');

        // Rotate the arrow by 270 degrees on click
        arrowIcon2.classList.toggle('rotated');
    });
});