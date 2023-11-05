// Listen to mousemove event on the document
document.addEventListener('mousemove', e => { 
  // Set CSS variables on the document root for moving the background based on mouse position
  Object.assign(document.documentElement, {
      style: `
      --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
      --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
      `
  })
})

// Function to redirect to the index page
function redirectToIndex() {
    window.location.href = '/html/index.html'; // Sets the window's location to the index.html, causing a page redirect
}

// Initialize particles.js with configuration for the particles effect
particlesJS("particles-js", {
    particles: {
      number: {
        value: 80, // Number of particles
        density: { enable: true, value_area: 800 } // Density of particles
      },
      color: { value: "#ffffff" }, // Color of particles
      shape: {
        type: "circle", // Shape of particles
        stroke: { width: 0, color: "#000000" }, // Stroke of the particles
        polygon: { nb_sides: 5 }, // If polygon, number of sides
        image: { src: "img/github.svg", width: 100, height: 100 } // If image, source and dimensions
      },
      opacity: {
        value: 0.352750653390415, // Opacity of particles
        random: true, // Randomize opacity
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } // Animation settings for opacity
      },
      size: {
        value: 3, // Size of particles
        random: true, // Randomize size
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false } // Animation settings for size
      },
      line_linked: {
        enable: false, // Enable/disable line linking between particles
        distance: 150, // Maximum distance for line linking
        color: "#ffffff", // Color of the lines
        opacity: 0.4, // Opacity of the lines
        width: 1 // Width of the lines
      },
      move: {
        enable: true, // Enable/disable particle movement
        speed: 1.6, // Speed of particle movement
        direction: "none", // Direction of movement
        random: false, // Randomize movement
        straight: false, // Straight movement without variation
        out_mode: "out", // Movement out of canvas boundaries
        bounce: false, // Bounce particles off canvas edges
        attract: { enable: false, rotateX: 600, rotateY: 1200 } // Attraction/repulsion settings
      }
    },
    retina_detect: true // Enable/disable retina display detection
});
