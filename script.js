 // Accordion/Toggle Functionality
        function setupAccordionToggle() {
            const accordionItems = document.querySelectorAll('.work-item');
            if (!accordionItems.length) { return; }

            accordionItems.forEach(item => {
                const header = item.querySelector('.work-card-header');
                const details = item.querySelector('.work-details');
                const icon = header ? header.querySelector('.toggle-icon') : null;

                if (!header || !details || !icon) {
                    console.warn("Skipping accordion item due to missing elements:", item);
                    return;
                }

                header.addEventListener('click', () => {
                    item.classList.toggle('active');
                    header.setAttribute('aria-expanded', item.classList.contains('active').toString());
                    // --- Optional: Close others ---
                    // accordionItems.forEach(otherItem => {
                    //    if (otherItem !== item && otherItem.classList.contains('active')) {
                    //         otherItem.classList.remove('active');
                    //         otherItem.querySelector('.work-card-header').setAttribute('aria-expanded', 'false');
                    //     }
                    // });
                });
            });
        }

        // Simple Fade-In Animation on Scroll
        function setupScrollAnimation() {
            const sections = document.querySelectorAll('.content-section');
            if (!sections.length) { return; }

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Optional: Unobserve after animation to save resources
                        // observer.unobserve(entry.target);
                    }
                    // Optional: Remove 'visible' class if element scrolls out of view
                    // else {
                    //     entry.target.classList.remove('visible');
                    // }
                });
            }, {
                rootMargin: '0px', // How close to edge before triggering
                threshold: 0.1 // % of element visible before triggering (adjust as needed)
            });

            sections.forEach(section => {
                observer.observe(section);
            });
        }


        // Run setup functions when DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            setupAccordionToggle();
            setupScrollAnimation(); // Initialize scroll animation
        });
