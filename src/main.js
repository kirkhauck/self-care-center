var messageSelectorBox = document.querySelector('#parent-message-selector-box')
var messageBox = document.querySelector('#message-box')
var favoriteButtonsBox = document.querySelector('#favorite-buttons-box')
var favoritedMessagesSection = document.querySelector('#favorited-messages-section')
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
document.addEventListener('click', deleteMessage)



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function receiveMessage() {
  meditator.classList.add('none');
  favoriteButton.classList.remove('none');
  viewFavoritesButton.classList.remove('none');
  if (document.querySelector('#affirmation-select').checked) {
    randomMessage = affirmations[getRandomIndex(affirmations)];
    messageBox.innerHTML =
      `
      <p>${randomMessage}</p>
      `
  } else if (document.querySelector('#mantra-select').checked) {
    randomMessage = mantras[getRandomIndex(mantras)];
    messageBox.innerHTML =
    `
    <p>${randomMessage}</p>
    `
  }
}

function favorite() {
  var messageSaved = false;
  // var messageNumber = Date.now();

  for (i = 0; i < favoriteMessages.length; i++) {
    if (randomMessage === favoriteMessages[i]) {
      messageSaved = true;
    }
  }

    if(messageSaved === false) {
    favoriteMessages.push(randomMessage);
    favoritedMessagesSection.innerHTML +=
    `
    <div class="delete-message-box">
      <button class="js-delete-message">X</button>
      <p class="favorited-message">${randomMessage}</p>
    </div>
    `;
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

function deleteMessage(event) {
  var element = event.target;
  var deleteBox;
  var favoriteMessage;
  
  if (element.classList.contains("js-delete-message")) {
    deleteBox = event.target.parentElement;
    favoriteMessage = deleteBox.lastElementChild.innerText;
    for (i = 0; i < favoriteMessages.length; i++) {
      if (favoriteMessage === favoriteMessages[i]) {
        favoriteMessages.splice(i, 1);
        deleteBox.remove();
      }
    }
  }
}