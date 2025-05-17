// IntersectionObserver for Scroll Animations
const animateElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

animateElements.forEach(element => observer.observe(element));

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }

        // Close hamburger menu on mobile
        navMenu.classList.remove('active');
        hamburger.textContent = '☰';
    });
});

// Contact Form Validation
$(document).ready(function() {
    $('#contact-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: {
                required: "Please enter your name.",
                minlength: "Name must be at least 2 characters."
            },
            email: {
                required: "Please enter your email.",
                email: "Please enter a valid email address."
            },
            message: {
                required: "Please enter a message.",
                minlength: "Message must be at least 10 characters."
            }
        },
        errorElement: 'span',
        errorClass: 'error',
        errorPlacement: function(error, element) {
            error.insertAfter(element.closest('.input-group'));
        },
        submitHandler: function(form) {
            const name = $('#contact-name').val();
            const email = $('#contact-email').val();
            const message = $('#contact-message').val();

            // Store in localStorage
            const contactData = { name, email, message, timestamp: new Date().toISOString() };
            let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
            contacts.push(contactData);
            localStorage.setItem('contacts', JSON.stringify(contacts));

            // Show SweetAlert2 success notification
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Data successfully stored!',
                timer: 2000,
                showConfirmButton: false
            });

            form.reset();
        }
    });

    // Enquiry Form Validation
    $('#enquiry-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            mobile: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            product: {
                required: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: {
                required: "Please enter your full name.",
                minlength: "Name must be at least 2 characters."
            },
            email: {
                required: "Please enter your email.",
                email: "Please enter a valid email address."
            },
            mobile: {
                required: "Please enter your mobile number.",
                digits: "Mobile number must contain only digits.",
                minlength: "Mobile number must be 10 digits.",
                maxlength: "Mobile number must be 10 digits."
            },
            product: {
                required: "Please select a product."
            },
            message: {
                required: "Please enter a message.",
                minlength: "Message must be at least 10 characters."
            }
        },
        errorElement: 'span',
        errorClass: 'error',
        errorPlacement: function(error, element) {
            error.insertAfter(element.closest('.input-group'));
        },
        submitHandler: function(form) {
            const name = $('#enquiry-name').val();
            const email = $('#enquiry-email').val();
            const mobile = $('#enquiry-mobile').val();
            const product = $('#enquiry-product').val();
            const message = $('#enquiry-message').val();

            // Store in localStorage
            const enquiryData = { name, email, mobile, product, message, timestamp: new Date().toISOString() };
            let enquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
            enquiries.push(enquiryData);
            localStorage.setItem('enquiries', JSON.stringify(enquiries));

            // Show SweetAlert2 success notification
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Data successfully stored!',
                timer: 2000,
                showConfirmButton: false
            });

            form.reset();
        }
    });
});