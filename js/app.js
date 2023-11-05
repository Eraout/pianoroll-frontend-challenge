import PianoRoll from './pianoroll.js';

class PianoRollDisplay {
  constructor(csvURL) {
    this.csvURL = csvURL;
    this.data = null;
  }

  async loadPianoRollData() {
    try {
      const response = await fetch('https://pianoroll.ai/random_notes');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      this.data = await response.json();
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

// Function to prepare and style a piano roll card element
preparePianoRollCard(rollId) {
  // Create a new div element to represent the card
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('piano-roll-card');

  // Assign animation classes based on the modulo of the roll ID
  switch(rollId % 3) {
      case 0:
          cardDiv.classList.add('card-left'); // Class for left-positioned card
          break;
      case 1:
          cardDiv.classList.add('card-center'); // Class for center-positioned card
          break;
      case 2:
          cardDiv.classList.add('card-right'); // Class for right-positioned card
          break;
  }
  
  // Add an event listener for a 'click' event on each card
  cardDiv.addEventListener('click', function() {
      // When the card is clicked, several DOM operations are performed:
      
      // Retrieve the main card and both possible containers for the cards
      let mainCard = document.querySelector('.main-card');
      let gridContainer = document.querySelector("#pianoRollContainer, #pianoRollMainVeiwContainer");
      let allCards = gridContainer.querySelectorAll('.piano-roll-card');
      let buttonContainer = document.querySelector('#buttonContainer');
      let slideCardContainer = document.querySelector('.slide-card-container');
      let mainCardContainer = document.querySelector('.main-card-container');

      // If no slide card container exists, create new containers for the slide and main cards
      if (!slideCardContainer) {
          slideCardContainer = document.createElement('div');
          mainCardContainer = document.createElement('div');
          slideCardContainer.classList.add('slide-card-container');
          mainCardContainer.classList.add('main-card-container');
          
          // Append the new containers to the grid container if it exists
          if(gridContainer) {
              gridContainer.appendChild(slideCardContainer);
              gridContainer.appendChild(mainCardContainer);
          }
      }

      // Update classes of all cards, switching them to 'slide-card' and removing position-specific classes
      allCards.forEach(card => {
          card.classList.remove('card-left', 'card-center', 'card-right');
          card.classList.add('slide-card');
      });

      // Update the main card class if it exists, transitioning it to a slide card
      if (mainCard) {
          mainCard.classList.remove('main-card');
          mainCard.classList.add('slide-card'); 
      }

      // Update the clicked card to be the main card
      this.classList.remove('slide-card');
      this.classList.add('main-card');
      mainCardContainer.appendChild(this);

      // Reassign all slide cards to the slide card container
      const slideCards = document.querySelectorAll('.slide-card');
      slideCards.forEach(card => {
          slideCardContainer.appendChild(card);
      });

      // Change the ID of the grid container to update its styling, 
      // and update the button container ID to 'main-active' to possibly show it
      if (gridContainer) {
          gridContainer.id = "pianoRollMainVeiwContainer";
          buttonContainer.id = "main-active";
      }
  });
  
    // Create and append other elements to the card container as needed
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');
    descriptionDiv.textContent = `This is a piano roll number ${rollId}`;
    cardDiv.appendChild(descriptionDiv);

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('piano-roll-svg');
    svg.setAttribute('width', '80%');
    svg.setAttribute('height', '150');
    

    // Append the SVG to the card container
    cardDiv.appendChild(svg);

    return { cardDiv, svg }
  }

  async generateSVGs() {
    if (!this.data) await this.loadPianoRollData();
    if (!this.data) return;
    
    const pianoRollContainer = document.getElementById('pianoRollContainer');
    pianoRollContainer.innerHTML = '';
    for (let it = 0; it < 20; it++) {
      const start = it * 60;
      const end = start + 60;
      const partData = this.data.slice(start, end);

      const { cardDiv, svg } = this.preparePianoRollCard(it)

      pianoRollContainer.appendChild(cardDiv);
      const roll = new PianoRoll(svg, partData);
    }
  }
}

document.getElementById('loadCSV').addEventListener('click', async () => {
  const csvToSVG = new PianoRollDisplay();
  await csvToSVG.generateSVGs();
});


document.addEventListener('mousemove', e => { // Getting mousemove cordinate X and Y
  Object.assign(document.documentElement, {  // Adding cordinates to <html> style
      style: `
      --move-x: ${(e.clientX - window.innerWidth / 2) * -.05}deg; 
      --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
      `
  })
})