// Banner Section
// document.addEventListener("DOMContentLoaded", () => {
//   fetchBannerData();
// });

// async function fetchBannerData() {
//   try {
//     const response = await fetch("http://localhost:3000/api/sheets/banner");
//     const result = await response.json();

//     if (result.success) {
//       populateBannerSlider(result.data);
//     } else {
//       console.error("Failed to fetch banner data:", result.message);
//     }
//   } catch (error) {
//     console.error("Error fetching banner data:", error);
//   }
// }

// function populateBannerSlider(data) {
//   const sliderContainer = document.querySelector(".owl-carousel");

//   // Clear existing slides
//   sliderContainer.innerHTML = "";

//   // Skip header row if it exists
//   const sliderData = data.slice(1);

//   sliderData.forEach((slide) => {
//     const [
//       imageUrl,
//       supheading,
//       heading,
//       description,
//       moreAboutLink,
//       contactLink,
//     ] = slide;

//     console.log("Processing slide:", {
//       imageUrl,
//       supheading,
//       heading,
//       fullImagePath: imageUrl.startsWith("http")
//         ? imageUrl
//         : `${window.location.origin}/${imageUrl.replace(/^\//, "")}`,
//     });

//     const fullImagePath = imageUrl.startsWith("http")
//       ? imageUrl
//       : `${window.location.origin}/${imageUrl.replace(/^\//, "")}`;

//     const slideElement = document.createElement("div");
//     slideElement.classList.add("item");

//     slideElement.innerHTML = `
//       <img
//         src="${fullImagePath}"
//         alt="Slider"
//         onerror="console.error('Image load error:', this.src)"
//         onload="console.log('Image loaded successfully:', this.src)"
//         style="max-width: 100%; height: auto;"
//       >
//       <div class="overlay-bg"></div>
//       <div class="container d-flex align-items-center text-center">
//         <div class="wrap-caption">
//           <p class="caption-supheading">${supheading}</p>
//           <h1 class="caption-heading">${heading}</h1>
//           <p>${description}</p>
//           <a href="${moreAboutLink}" class="btn btn-secondary">MORE ABOUT US</a>
//           <a href="${contactLink}" class="btn btn-primary">CONTACT US NOW</a>
//         </div>
//       </div>
//     `;

//     sliderContainer.appendChild(slideElement);
//   });

//   // Reinitialize Owl Carousel
//   reinitializeOwlCarousel();
// }

// function reinitializeOwlCarousel() {
//   // Destroy existing Owl Carousel instance if it exists
//   const $carousel = $(".owl-carousel");
//   if ($carousel.data("owl.carousel")) {
//     $carousel.owlCarousel("destroy");
//   }

//   // Reinitialize Owl Carousel
//   $carousel.owlCarousel({
//     loop: true,
//     nav: true,
//     navText: [
//       '<i class="fa fa-angle-left" aria-hidden="true"></i>',
//       '<i class="fa fa-angle-right" aria-hidden="true"></i>',
//     ],
//     navContainer: ".banner .custom-nav",
//     items: 1,
//   });
// }

// About Section

document.addEventListener("DOMContentLoaded", () => {
  fetchAboutSectionData();
});

async function fetchAboutSectionData() {
  try {
    const response = await fetch(
      "https://msagro-backend.onrender.com/api/sheets/about"
    );
    const result = await response.json();

    if (result.success) {
      populateAboutSection(result.data);
    } else {
      console.error("Failed to fetch about section data:", result.message);
    }
  } catch (error) {
    console.error("Error fetching about section data:", error);
  }
}

function populateAboutSection(data) {
  // Ensure data is valid
  if (!data || data.length < 2) {
    console.error("Invalid data received for About section");
    return;
  }

  // Skip header row
  const aboutData = data.slice(1);

  // Update section heading and subheading
  const sectionHeading = document.querySelector(
    "#about-section .section-heading"
  );
  const sectionSubheading = document.querySelector(
    "#about-section .subheading"
  );

  // Set section heading and subheading from the first valid row
  const headingRow = aboutData.find((row) => row[0] && row[0].trim() !== "");
  if (headingRow && headingRow.length >= 2) {
    sectionHeading.textContent = headingRow[0] || "Why Choose Us?";
    sectionSubheading.textContent =
      headingRow[1] ||
      "Innovative agricultural solutions transforming farming through sustainable technologies, organic practices, and responsible global stewardship.";
  }

  // Update about section items
  const aboutItemsContainer = document.querySelector(
    "#about-section .row:last-child"
  );
  const itemElements = aboutItemsContainer.querySelectorAll(
    ".col-sm-12.col-md-6.col-lg-3"
  );

  // Iterate through data items and update each element
  aboutData.forEach((itemData, index) => {
    // Skip rows without sufficient data
    if (itemData.length < 3 || !itemData[2]) return;

    // Ensure we have a corresponding element to update
    if (index < itemElements.length) {
      const currentItem = itemElements[index];

      // Update icon
      const iconElement = currentItem.querySelector(".icon i");
      if (iconElement) {
        iconElement.className = `fa ${itemData[2]}`; // Icon class
      }

      // Update title
      const titleElement = currentItem.querySelector(".body-content h4");
      if (titleElement) {
        titleElement.textContent = itemData[3] || ""; // Title
      }

      // Update description
      const descriptionElement = currentItem.querySelector(".body-content p");
      if (descriptionElement) {
        descriptionElement.textContent = itemData[4] || ""; // Description
      }
    }
  });
}

// Contact Section
document.addEventListener("DOMContentLoaded", () => {
  fetchContactData();
});

async function fetchContactData() {
  try {
    const response = await fetch(
      "https://msagro-backend.onrender.com/api/sheets/contact"
    );
    const result = await response.json();

    if (result.success) {
      populateContactSection(result.data);
    } else {
      console.error("Failed to fetch contact data:", result.message);
    }
  } catch (error) {
    console.error("Error fetching contact data:", error);
  }
}

function populateContactSection(data) {
  // Skip header row if it exists
  const contactData = data.slice(1)[0]; // Assuming first row after header contains data

  // Assuming the sheet columns are:
  // 0: Section Heading
  // 1: Phone Number
  const [sectionHeading, phoneNumber] = contactData;

  // Update section heading
  const headingElement = document.querySelector(
    "#contact-section .section-heading"
  );
  if (headingElement) {
    headingElement.textContent = sectionHeading;
  }

  // Update phone number
  const phoneButton = document.querySelector("#contact-section .btn-primary");
  if (phoneButton) {
    phoneButton.textContent = phoneNumber;
    phoneButton.href = `tel:${phoneNumber}`;
  }
}

// Services Section

document.addEventListener("DOMContentLoaded", () => {
  fetchServicesData();
});

async function fetchServicesData() {
  try {
    const response = await fetch(
      "https://msagro-backend.onrender.com/api/sheets/services"
    );
    const result = await response.json();

    if (result.success) {
      populateServicesSection(result.data);
    } else {
      console.error("Failed to fetch services data:", result.message);
    }
  } catch (error) {
    console.error("Error fetching services data:", error);
  }
}

function populateServicesSection(data) {
  const servicesContainer = document.querySelector(
    "#services-section .row:nth-child(2)"
  );

  // Clear existing services (optional)
  servicesContainer.innerHTML = "";

  // Skip header row if it exists
  const servicesData = data.slice(1);

  servicesData.forEach((service) => {
    // Assuming the sheet columns are:
    // 0: Image URL
    // 1: Service Title
    // 2: Service Description
    const [imageUrl, title, description] = service;

    const serviceElement = document.createElement("div");
    serviceElement.classList.add("col-sm-12", "col-md-12", "col-lg-4", "mb-4");

    serviceElement.innerHTML = `
      <div class="box-image-1">
        <div class="media-box">
          <img src="${imageUrl}" class="img-fluid" alt="${title}">
        </div>
        <div class="body-content">
          <h4>${title}</h4>
          <p>${description}</p>
        </div>
      </div>
    `;

    servicesContainer.appendChild(serviceElement);
  });
}

// Projects Section

document.addEventListener("DOMContentLoaded", () => {
  fetchProjectsData();
});

async function fetchProjectsData() {
  try {
    const response = await fetch(
      "https://msagro-backend.onrender.com/api/sheets/projects"
    );
    const result = await response.json();

    if (result.success) {
      populateProjectsSection(result.data);
    } else {
      console.error("Failed to fetch projects data:", result.message);
    }
  } catch (error) {
    console.error("Error fetching projects data:", error);
  }
}

function populateProjectsSection(data) {
  const projectsContainer = document.querySelector(
    "#projects-section .row.popup-gallery"
  );

  // Clear existing projects (optional)
  const existingProjects = projectsContainer.querySelectorAll(
    ".col-xs-12.col-md-6.col-lg-3"
  );
  existingProjects.forEach((project) => project.remove());

  // Skip header row if it exists
  const projectsData = data.slice(1);

  projectsData.forEach((project) => {
    // Assuming the sheet columns are:
    // 0: Image URL
    // 1: Project Title/Description
    const [imageUrl, projectTitle] = project;

    const projectElement = document.createElement("div");
    projectElement.classList.add("col-xs-12", "col-md-6", "col-lg-3");

    projectElement.innerHTML = `
      <div class="box-gallery">
        <a href="${imageUrl}" title="${projectTitle}">
          <img src="${imageUrl}" alt="${projectTitle}" class="img-fluid">
          <div class="project-info">
            <div class="project-icon">
              <span class="fa fa-search"></span>
            </div>
          </div>
        </a>
      </div>
    `;

    projectsContainer.appendChild(projectElement);
  });

  // Reinitialize Magnific Popup for the new gallery items
  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr("title") + "";
      },
    },
  });
}

// Testimonial Section

document.addEventListener("DOMContentLoaded", () => {
  fetchTestimonialData();
});

async function fetchTestimonialData() {
  try {
    const response = await fetch(
      "https://msagro-backend.onrender.com/api/sheets/testimonials"
    );
    const result = await response.json();

    if (result.success) {
      populateTestimonialSection(result.data);
    } else {
      console.error("Failed to fetch testimonial data:", result.message);
    }
  } catch (error) {
    console.error("Error fetching testimonial data:", error);
  }
}

function populateTestimonialSection(data) {
  const testimonialContainer = document.querySelector("#testimonial");

  // Clear existing testimonials (optional)
  testimonialContainer.innerHTML = "";

  // Skip header row if it exists
  const testimonialData = data.slice(1);

  testimonialData.forEach((testimonial) => {
    // Assuming the sheet columns are:
    // 0: Image URL
    // 1: Quote
    // 2: Name
    // 3: Role/Designation
    const [imageUrl, quote, name, role] = testimonial;

    const testimonialElement = document.createElement("div");
    testimonialElement.classList.add("item");

    testimonialElement.innerHTML = `
      <div class="rs-box-testimony">
        <div class="media-box">
          <img src="${imageUrl}" alt="" class="rounded-circle">
        </div>
        <div class="quote-box">
          <blockquote class="quote text-black">
            ${quote}
          </blockquote>
          <div class="quote-name text-black">
            ${name} <span class="quote-name text-black">${role}</span>
          </div>
        </div>
      </div>
    `;

    testimonialContainer.appendChild(testimonialElement);
  });

  // Reinitialize Owl Carousel
  reinitializeTestimonialCarousel();
}

function reinitializeTestimonialCarousel() {
  // Destroy existing Owl Carousel instance if it exists
  const $carousel = $("#testimonial");
  if ($carousel.data("owl.carousel")) {
    $carousel.owlCarousel("destroy");
  }

  // Reinitialize Owl Carousel
  $carousel.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    autoplay: true,
  });
}

// Footer Section

document.addEventListener("DOMContentLoaded", () => {
  fetchFooterData();
});

async function fetchFooterData() {
  try {
    const response = await fetch(
      "https://msagro-backend.onrender.com/api/sheets/footer"
    );
    const result = await response.json();

    if (result.success) {
      populateFooterSection(result.data);
    } else {
      console.error("Failed to fetch footer data:", result.message);
    }
  } catch (error) {
    console.error("Error fetching footer data:", error);
  }
}

function populateFooterSection(data) {
  // Skip header row if it exists
  const footerData = data.slice(1)[0]; // Assuming first data row contains footer info

  // Assuming the sheet columns are:
  // 0: Logo URL
  // 1: Description
  // 2: Facebook URL
  // 3: Instagram URL
  // 4: LinkedIn URL
  // 5: Address
  // 6: Phone
  // 7: Email
  const [
    logoUrl,
    description,
    facebookUrl,
    instagramUrl,
    linkedinUrl,
    address,
    phone,
    email,
  ] = footerData;

  // Update logo
  const logoElement = document.querySelector(".logo-bottom");
  if (logoElement && logoUrl) {
    logoElement.src = logoUrl;
  }

  // Update description
  const descriptionElement = document.querySelector(".footer-item p");
  if (descriptionElement && description) {
    descriptionElement.textContent = description;
  }

  // Update social media links
  const socialLinks = document.querySelectorAll(".sosmed-icon a");
  if (socialLinks.length >= 5) {
    socialLinks[0].href = facebookUrl || "#";
    socialLinks[1].href = instagramUrl || "#";
    socialLinks[2].href = linkedinUrl || "#";
  }

  // Update contact info
  const contactElements = {
    address: document.querySelector(".footer-item .row:nth-child(2) .col-7"),
    phone: document.querySelector(".footer-item .row:nth-child(3) .col-7"),
    email: document.querySelector(".footer-item .row:nth-child(4) .col-7"),
  };

  if (contactElements.address)
    contactElements.address.textContent = address || "Ghana";
  if (contactElements.phone)
    contactElements.phone.textContent = phone || "053-260-7243";
  if (contactElements.email)
    contactElements.email.textContent = email || "dendy@gmail.com";
}



// Add this script before closing </body> tag or in a separate JS file
document.addEventListener('DOMContentLoaded', function() {
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Get the navbar toggler button and collapse menu
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Add click event to each nav link
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            // Check if the navbar is expanded (mobile view)
            if (navbarCollapse.classList.contains('show')) {
                // Close the navbar by simulating a click on the toggler
                navbarToggler.click();
            }
        });
    });
});
