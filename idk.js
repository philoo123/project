
    // Function to handle smooth scrolling and background color change
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Remove 'active-section' class from all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active-section');
        });

        // Add 'active-section' class to the target section
        targetElement.classList.add('active-section');

        // Smooth scrolling
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust offset as needed
            behavior: 'smooth'
        });
    }

    // Adding event listeners to navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });
    document.addEventListener("DOMContentLoaded", function() {
        const paragraphs = document.querySelectorAll('p');

        paragraphs.forEach(paragraph => {
            paragraph.addEventListener('click', function() {
                this.classList.toggle('light-text');
            });
        });
    });
    
