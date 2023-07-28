window.addEventListener("load", function () {
    const launchForm = document.querySelector('[data-testid="testForm"]');
    const pilotNameInput = document.getElementById('pilotName');
    const coPilotNameInput = document.querySelector('input[name="copilotName"]');
    const fuelLevelInput = document.querySelector('input[name="fuelLevel"]');
    const cargoMassInput = document.querySelector('input[name="cargoMass"]');
    const launchStatus = document.getElementById('launchStatus');
    const pilotStatus = document.getElementById('pilotStatus');
    const coPilotStatus = document.getElementById('copilotStatus');
    const fuelStatus = document.getElementById('fuelStatus');
    const cargoStatus = document.getElementById('cargoStatus');
    const faultyItems = document.getElementById('faultyItems');
    const missionTarget = document.getElementById('missionTarget');
  
    launchForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const pilotName = pilotNameInput.value;
      const coPilotName = coPilotNameInput.value;
      const fuelLevel = parseFloat(fuelLevelInput.value);
      const cargoMass = parseFloat(cargoMassInput.value);
  
      if (pilotName.trim() === "" || coPilotName.trim() === "" || isNaN(fuelLevel) || isNaN(cargoMass)) {
        alert("Please fill out all fields correctly.");
        faultyItems.style.visibility = 'visible';
        return;
      }
  
      formSubmission(document, faultyItems, pilotName, coPilotName, fuelLevel, cargoMass);
    });
  
    myFetch()
      .then(function (data) {
        const selectedPlanet = pickPlanet(data);
        addDestinationInfo(
          missionTarget,
          selectedPlanet.name,
          selectedPlanet.diameter,
          selectedPlanet.star,
          selectedPlanet.distance,
          selectedPlanet.moons,
          selectedPlanet.image
        );
      })
      .catch(function (error) {
        console.error('Error fetching planetary data:', error);
      });
  });
  
  function addDestinationInfo(missionTarget, name, diameter, star, distance, moons, imageUrl) {
    const missionTargetHTML = `
      <h2>Mission Destination</h2>
      <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
      </ol>
      <img src="${imageUrl}" alt="Mission Destination Image">
    `;
  
    missionTarget.innerHTML = missionTargetHTML;
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
  
  function formSubmission(document, faultyItems, pilot, coPilot, fuelLevel, cargoLevel) {
    const pilotStatus = document.getElementById('pilotStatus');
    const coPilotStatus = document.getElementById('copilotStatus');
    const fuelStatus = document.getElementById('fuelStatus');
    const cargoStatus = document.getElementById('cargoStatus');
  
    pilotStatus.textContent = `Pilot ${pilot} is ready for launch`;
    coPilotStatus.textContent = `Co-pilot ${coPilot} is ready for launch`;
  
    let isReadyForLaunch = true;
  
    if (fuelLevel < 10000) {
      fuelStatus.textContent = 'Fuel level too low for launch';
      fuelStatus.style.color = 'red';
      isReadyForLaunch = false;
    } else {
      fuelStatus.textContent = 'Fuel level high enough for launch';
      fuelStatus.style.color = 'initial';
    }
  
    if (cargoLevel > 10000) {
      cargoStatus.textContent = 'Cargo mass too heavy for launch';
      cargoStatus.style.color = 'red';
      isReadyForLaunch = false;
    } else {
      cargoStatus.textContent = 'Cargo mass low enough for launch';
      cargoStatus.style.color = 'inital';
    }
  
    const launchStatus = document.getElementById('launchStatus');
  
    if (isReadyForLaunch) {
      launchStatus.textContent = 'Shuttle is Ready for Launch';
      launchStatus.style.color = 'green';
    } else {
      launchStatus.textContent = 'Shuttle Not Ready for Launch';
      launchStatus.style.color = 'red';
    }

  }
  