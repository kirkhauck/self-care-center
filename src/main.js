var messageSelectorBox = document.querySelector('#parent-message-selector-box')
var messageBox = document.querySelector('#message-box')
var favoriteButtonsBox = document.querySelector('#favorite-buttons-box')
var savedView = document.querySelector('#saved-view')
var meditator = document.querySelector('#meditator');
var receiveMessageButton = document.querySelector('#receive-message-button');
var favoriteButton = document.querySelector('#favorite-button')
var viewFavoritesButton = document.querySelector('#view-favorites-button')
var viewHomeButton = document.querySelector('#view-home')
var randomMessage;
var favoriteMessages = [];



receiveMessageButton.addEventListener('click', receiveMessage);
favoriteButton.addEventListener('click', favorite);
viewFavoritesButton.addEventListener('click', viewFavorites);
viewHomeButton.addEventListener('click', viewHome)



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function receiveMessage() {
  meditator.classList.add('none');
  favoriteButton.classList.remove('none');
  viewFavoritesButton.classList.remove('none');
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

function viewFavorites() {
  messageSelectorBox.classList.add('none')
  messageBox.classList.add('none')
  favoriteButtonsBox.classList.add('none')
  savedView.classList.remove('none')
}

function viewHome() {
  savedView.classList.add('none')
  messageSelectorBox.classList.remove('none')
  messageBox.classList.remove('none')
  favoriteButtonsBox.classList.remove('none')
}