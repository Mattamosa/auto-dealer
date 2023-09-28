import { reviews } from '../data/reviews.js';
console.log(reviews);

// Creates empty card
const myTarget = document.querySelector("#cards");

// Creates a section
for (let x = 0; x < reviews.length; x++) {
  const mySection = document.createElement('section');
  const myName = document.createElement('h3');
  myName.textContent = reviews[x].name;
  const myReview = document.createElement('p');
  myReview.textContent = reviews[x].text;

  const myRating = document.createElement('div');
  const starsCount = reviews[x].stars;

  for (let step = 0; step < starsCount; step++) {
    const revStar = document.createElement('img');
    revStar.src = "../images/star.svg";
    myRating.appendChild(revStar);
  }

  // Builds the figure with child elements
  mySection.appendChild(myName);
  mySection.appendChild(myRating);
  mySection.appendChild(myReview);

  //Adds a new card to the page
  myTarget.appendChild(mySection);

  console.log(starsCount);
} // END OF FOR LOOP

// Navigation Manu Hamburger / X
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const hamburgerBtn = document.getElementById("hamburgerBtn");
hamburgerBtn.onclick = toggleMenu;

// Places current year into footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();
