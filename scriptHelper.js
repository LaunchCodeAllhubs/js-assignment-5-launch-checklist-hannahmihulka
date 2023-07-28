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

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
