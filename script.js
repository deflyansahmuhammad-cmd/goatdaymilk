// Wait until the whole page is loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Set up the Intersection Observer to watch for elements entering the screen
    const observer = new IntersectionObserver((entries) => {
        // Loop over each entry (each element that is being observed)
        entries.forEach(entry => {
            // Check if the element is currently intersecting with the viewport (i.e., it's on screen)
            if (entry.isIntersecting) {
                // If it is, add the 'visible' class to it.
                // The CSS will then handle the fade-in animation.
                entry.target.classList.add('visible');

                // Optional: Stop observing the element once it's visible so the animation doesn't re-trigger
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Optional: threshold makes the animation trigger when 10% of the element is visible
        threshold: 0.1 
    });

    // Find all elements on the page with the class 'hidden'
    const hiddenElements = document.querySelectorAll('.hidden');

    // Tell the observer to watch each of these hidden elements
    hiddenElements.forEach(element => {
        observer.observe(element);
    });

    document.addEventListener('DOMContentLoaded', () => {

    // ... (your existing Intersection Observer code) ...
    hiddenElements.forEach(element => {
        observer.observe(element);
    });

    // --- NEW CODE FOR WHATSAPP BUTTON ---
    const fab = document.querySelector('.whatsapp-fab');

    // Function to check scroll position
    const checkScroll = () => {
        // If user has scrolled more than 200px down
        if (window.scrollY > 200) {
            fab.classList.add('visible');
        } else {
            fab.classList.remove('visible');
        }
    };

    // Listen for scroll events
    window.addEventListener('scroll', checkScroll);

});
});