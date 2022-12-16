var receiveMessageButton = document.querySelector('.receive-message-button');
var meditator = document.querySelector('#meditator');
var messageBox = document.querySelector('#message-box')
var favoriteButton = document.querySelector('#favorite-button')
var randomMessage;

receiveMessageButton.addEventListener('click', receiveMessage);
favoriteButton.addEventListener('click', toggleFavorite);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function receiveMessage() {
  meditator.classList.add('none');
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

function toggleFavorite() {
  favoriteButton.classList.toggle('red-heart')
}