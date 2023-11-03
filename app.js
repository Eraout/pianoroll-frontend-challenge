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

  preparePianoRollCard(rollId) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('piano-roll-card');
    switch(rollId % 3) { // Add animation help class
      case 0:
        cardDiv.classList.add('card-left');
        break;
      case 1:
        cardDiv.classList.add('card-center');
        break;
      case 2:
        cardDiv.classList.add('card-right');
        break;
    }
    
    cardDiv.addEventListener('click', function() {    // Creating onClick function for cards
      let mainCard = document.querySelector('.main-card');
      let gridContainer = document.querySelector("#pianoRollContainer, #pianoRollMainVeiwContainer"); // Find containers * or *
      let allCards = gridContainer.querySelectorAll('.piano-roll-card');
  
      allCards.forEach(card => {  // Delleting useless classes and adding important
          card.classList.remove('card-left', 'card-center', 'card-right');
          card.classList.add('slide-card');
      });
  
      if (mainCard) { // Changing main card
          mainCard.classList.remove('main-card');
          mainCard.classList.add('slide-card');
      }
  
      this.classList.remove('slide-card');
      this.classList.add('main-card');
      
      if (gridContainer) { // Changing container properties
          gridContainer.id = "pianoRollMainVeiwContainer";
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