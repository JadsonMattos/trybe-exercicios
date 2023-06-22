const dogButton = document.querySelector('#random-dog');
const petImage = document.querySelector('#random-pet-image');
const catButton = document.querySelector('#random-cat');
const surpriseButton = document.querySelector('#surprise-me');

dogButton.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((data) => {
      const petURL = data.message;
      petImage.src = petURL;
    });
});

catButton.addEventListener('click', () => {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then((res) => res.json())
    .then(([data]) => {
      const petURL = data.url;
      petImage.src = petURL;
    });
});

surpriseButton.addEventListener('click', () => {
  Promise.any([
    fetch('https://api.thecatapi.com/v1/images/search'),
    fetch('https://dog.ceo/api/breeds/image/random'),
  ])
    .then((res) => res.json())
    .then((data) => {
      const petURL = data.message || data[0].url;
      petImage.src = petURL;
    });
});
