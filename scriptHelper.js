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
    const pilotStatus = list.querySelector('#pilotStatus');
    const coPilotStatus = list.querySelector('#copilotStatus');
    const fuelStatus = list.querySelector('#fuelStatus');
    const cargoStatus = list.querySelector('#cargoStatus');
    const launchStatus = document.getElementById('launchStatus');
    const faultyItems = document.getElementById('faultyItems');

    const pilotValidation = validateInput(pilot);
    if (pilotValidation !== 'Is a Number') {
        pilotStatus.textContext = 'Pilot: ${pilotValidation}';
    } else {
        pilotStatus.textContext = 'Pilot: ${pilot} Ready'; 
    }

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
