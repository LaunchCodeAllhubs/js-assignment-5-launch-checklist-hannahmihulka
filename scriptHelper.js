// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
     if (testInput.trim() === '') {
        return 'Empty';
    }

    if (isNaN(testInput)) {
        return 'Not a Number';
    }

    return 'Is a Number';
}
   


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotStatus = document.querySelector('#pilotStatus');
    const coPilotStatus = document.querySelector('#copilotStatus');
    const fuelStatus = document.querySelector('#fuelStatus');
    const cargoStatus = document.querySelector('#cargoStatus');
    const launchStatus = document.getElementById('launchStatus');
    const faultyItems = document.getElementById('faultyItems');

    const pilotValidation = validateInput(pilot);
    if (pilotValidation !== 'Is a Number') {
        pilotStatus.textContext = 'Pilot: ${pilotValidation}';
    } else {
        pilotStatus.textContext = 'Pilot: ${pilot} Ready'; 
    }

    const coPilotValidation = validateInput(copilot);
    if (coPilotValidation !== 'Is a Number') {
        coPilotStatus.textContent = `Co-pilot: ${coPilotValidation}`;
    } else {
        coPilotStatus.textContent = `Co-pilot: ${copilot} Ready`;
    }

    const fuelValidation = validateInput(fuelLevel);
    if (fuelValidation !== 'Is a Number') {
        fuelStatus.textContent = `Fuel level: ${fuelValidation}`;
    } else {
        fuelStatus.textContent = 'Fuel level high enough for launch';
    }

    const cargoValidation = validateInput(cargoLevel);
    if (cargoValidation !== 'Is a Number') {
        cargoStatus.textContent = `Cargo mass: ${cargoValidation}`;
    } else {
        cargoStatus.textContent = 'Cargo mass low enough for launch';
    }
    if (fuelValidation === 'Is a Number' && cargoValidation === 'Is a Number') {
        const fuelLevelNumber = parseFloat(fuelLevel);
        const cargoMassNumber = parseFloat(cargoLevel);

        if (fuelLevelNumber <10000) {
            faultyItems.style.visibility = 'visable';
            fuelStatus.textContent = 'Fuel level too low for launch';
            launchStatus.textContent = 'Shuttle not ready for launch';
            launchStatus.style.color = 'red';
        } else {
            fuelStatus.textContent = 'Fuel level high enough for launch';
        }

        if (cargoMassNumber > 10000) {
            faultyItems.style.visibility = 'visible';
            cargoStatus.textContent = 'Cargo mass too high for launch';
            launchStatus.textContent = 'Shuttle not ready for launch';
            launchStatus.style.color = '#C7254E';
        } else {
            cargoStatus.textContent = 'Cargo mass low enough for launch';
        }

        if (fuelLevelNumber >= 10000 && cargoMassNumber <= 10000) {
            launchStatus.textContent = 'Shuttle is ready for launch';
            launchStatus.style.color = '#419F6A';
            faultyItems.style.visibility = 'hidden';
        }
    }
    async function myFetch() {
        try {
          const response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching planetary data:', error);
          throw error;
        }
      }
      
      function pickPlanet(planets) {
        const randomIndex = Math.floor(Math.random() * planets.length);
        return planets[randomIndex];
      }
    } 
      
      module.exports.addDestinationInfo = addDestinationInfo;
      module.exports.validateInput = validateInput;
      module.exports.formSubmission = formSubmission;
      module.exports.pickPlanet = pickPlanet;
      module.exports.myFetch = myFetch; 
