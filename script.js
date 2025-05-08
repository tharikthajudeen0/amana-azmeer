// Toggle Button Start

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the button and additional info elements
    var toggleButton = document.getElementById("toggleButton");
    var additionalInfoElements = document.querySelectorAll(".additional-info");
  
    // Add event listener to the button
    toggleButton.addEventListener("click", function() {
      // Toggle the visibility of additional info elements
      additionalInfoElements.forEach(function(element) {
        if (element.style.display === "none") {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      });
    });
  });

// Toggle Button End



// Image Slider Start

var slideIndex = 0;
    var images = document.getElementsByClassName("slider-image");

    // Function to show the next image
    function showNextImage() {
      for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex >= images.length) {
        slideIndex = 0;
      }
      images[slideIndex].style.display = "block";
    }

    // Set an interval to automatically show the next image every 5 seconds
    setInterval(showNextImage, 5000);

// Image Slider End



// Contact Form Validation start

function validateForm() {
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;

    // Email validation
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // Phone number validation
    var phoneRegex = /^\d{10}$/; // Assumes 10-digit phone number
    if (!phone.match(phoneRegex)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }

    // If all validations pass, the form is valid
    alert("Form submitted successfully!");
    return true;
  }
// Contact Form validation end



// Smooth Scrolling Start
  document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach(function(link) {
      link.addEventListener("click", smoothScroll);
    });
  
    function smoothScroll(e) {
      e.preventDefault();
  
      var targetId = this.getAttribute("href");
      var targetPosition = document.querySelector(targetId).offsetTop;
      var startPosition = window.pageYOffset;
      var distance = targetPosition - startPosition;
      var duration = 1000; // Adjust scrolling speed here
  
      var startTime = null;
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
  
      // Easing function to make the scrolling smoother
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(animation);
    }
  });
  // Smooth Scrolling End
  



  // Event Handling Start

  const portfolioItem = document.querySelector('.portfolio-item');

  portfolioItem.addEventListener('click', () => {
    // Open pop-up or perform other actions
  });
  
  //Event Handling End
  


// Custom Animations Start
  const spanElement = document.querySelector('#typing-effect');

  // Wait for the DOM to load
  document.addEventListener('DOMContentLoaded', () => {
    animateTypingEffect();
  });
  
  function animateTypingEffect() {
    // Hide the span element initially
    spanElement.style.display = 'none';
  
    // Delay before starting the typing animation
    setTimeout(() => {
      spanElement.style.display = 'inline-block';
    }, 10000);
  }
// Custom Animations end

  
