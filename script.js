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
    
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});