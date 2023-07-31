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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // Update pilot and co-pilot names in the list
    const pilotStatus = document.getElementById('pilotStatus');
    const copilotStatus = document.getElementById('copilotStatus');
    pilotStatus.textContent = `Pilot ${pilot} is ready for launch`;
    copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`;
  
   
    const fuelStatus = document.getElementById('fuelStatus');
    const cargoStatus = document.getElementById('cargoStatus');
    let isReadyForLaunch = true;
  
    if (fuelLevel < 10000) {
      fuelStatus.textContent = 'Fuel level too low for launch';
      isReadyForLaunch = false;
    } else {
      fuelStatus.textContent = 'Fuel level high enough for launch';
    }
  
    if (cargoLevel > 10000) {
      cargoStatus.textContent = 'Cargo mass too heavy for launch';
      isReadyForLaunch = false;
    } else {
      cargoStatus.textContent = 'Cargo mass low enough for launch';
    }
  
    // Update shuttle readiness status message and CSS based on fuel and cargo status
    const launchStatus = document.getElementById('launchStatus');
    const faultyItems = document.getElementById('faultyItems');
  
    if (isReadyForLaunch) {
      launchStatus.textContent = 'Shuttle is Ready for Launch';
      launchStatus.style.color = 'rgb(65, 159, 106)';
    } else {
      launchStatus.textContent = 'Shuttle Not Ready for Launch';
      launchStatus.style.color = 'rgb(199,37,78)';
    }
  
    faultyItems.style.visibility = 'visible';
  
    
    document.getElementById('pilotName').value = '';
    document.querySelector('input[name="copilotName"]').value = '';
    document.querySelector('input[name="fuelLevel"]').value = '';
    document.querySelector('input[name="cargoMass"]').value = '';
  }
  

  module.exports.formSubmission = formSubmission;
  

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
