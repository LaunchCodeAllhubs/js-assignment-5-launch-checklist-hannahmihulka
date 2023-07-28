// Write your JavaScript code here!

window.addEventListener("load", function() {
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
        return;
    }
}); 
    
const listedPlanetsResponse = myFetch();
listedPlanetsResponse.then(function (result) {
  const listedPlanets = result;
  const selectedPlanet = pickPlanet(listedPlanets);
  addDestinationInfo(
    document,
    selectedPlanet.name,
    selectedPlanet.diameter,
    selectedPlanet.star,
    selectedPlanet.distance,
    selectedPlanet.moons,
    selectedPlanet.image
  );
});
}); 