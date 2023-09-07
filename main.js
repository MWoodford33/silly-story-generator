const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin",
    "Big Daddy",
    "Father Christmas"];
const insertY = ["the soup kitchen",
    "Disneyland",
    "the White House"];
const insertZ = ["spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"
];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

    if (customName.value !== "") {
        const name = customName.value;
        newStory = newStory.replaceAll("Bob", name);
    }

    if (document.getElementById("uk").checked) {
        //define the lbs to stones conversion function
        // const weight = Math.round(300);
        //convert weight from lbs to stones
        //create a function that takes in lbs and returns stones
        const pounds = 300;
        const weight = Math.round (poundsToStones(pounds));
        //define the fahrenheit temp
        const temperatureFahrenheit = 94;
        /* calculate the equivalent Celsius temp
        temperatureCelsius = ROUND((temperatureFahrenheit - 32) * 5 / 9) */
        const temperatureCelsius = Math.round((temperatureFahrenheit - 32) * 5 / 9);
        //create the temperature string temperatureString = temperatureCelsius + " Celsius"//
        //assign the temperature string to a constant variable//
        const temperature = `${temperatureCelsius} Celsius`;
        newStory = newStory.replaceAll("94 Fahrenheit", temperature);
        newStory = newStory.replaceAll("300 pounds", weight + ' stones');

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}

function poundsToStones(pounds) {
    //this function takes in the integer id'd by pounds
    //i need to run this equation pounds * stonesPerPound
    //i need to return the result of the equation
    //i need to return the result of the equation
    const stonesPerPound = 1 / 14;
    const stones = pounds * stonesPerPound;
    return stones;
}
