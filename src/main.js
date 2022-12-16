var receiveMessageButton = document.querySelector('.receive-message-button');
var meditator = document.querySelector('#meditator');
var messageBox = document.querySelector('#message-box')
var favoriteButton = document.querySelector('#favorite-button')
var randomMessage;
var favoriteMessages = [];

receiveMessageButton.addEventListener('click', receiveMessage);
favoriteButton.addEventListener('click', favorite);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function receiveMessage() {
  meditator.classList.add('none');
  favoriteButton.classList.remove('none');
  if (document.querySelector('#affirmation-select').checked) {
    randomMessage = affirmations[getRandomIndex(affirmations)];
    console.log(randomMessage)
    messageBox.innerHTML =
      `
      <p>${randomMessage}</p>
      `
  } else if (document.querySelector('#mantra-select').checked) {
    randomMessage = mantras[getRandomIndex(mantras)];
    console.log(randomMessage)
    messageBox.innerHTML =
    `
    <p>${randomMessage}</p>
    `
  }
}

function favorite() {
  var messageSaved;

  for (i = 0; i < favoriteMessages.length; i++) {
    if (randomMessage === favoriteMessages[i]) {
      messageSaved = true;
    }
  }

    if(!messageSaved) {
    favoriteMessages.push(randomMessage);
    console.log(favoriteMessages);
  }
}