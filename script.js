const circle = document.querySelector(".circle");
const letter = document.querySelector("h1");

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const flashTime = 200;

let busy = false;

const createRandomLetter = (previous) => {
  let randomLetter;

  do {
    const randomNumber = Math.floor(Math.random() * alphabets.length);
    randomLetter = alphabets[randomNumber];
  } while (previous === randomLetter);

  letter.textContent = randomLetter;
  return randomLetter;
};

const correct = () => {
  if (busy) return;
  busy = true;
  circle.classList.add("backgroundGreen");

  setTimeout(function () {
    circle.classList.remove("backgroundGreen");
    currentLetter = createRandomLetter(currentLetter);
    busy = false;
  }, flashTime);
};

const wrong = () => {
  if (busy) return;

  busy = true;

  circle.classList.add("backgroundRed");

  setTimeout(function () {
    circle.classList.remove("backgroundRed");

    busy = false;
  }, flashTime);
};

let currentLetter = createRandomLetter();

document.addEventListener("keydown", (e) => {
  if (!/^[a-z]$/i.test(e.key)) return;

  if (e.key.toUpperCase() === currentLetter) {
    correct();
  } else {
    wrong();
  }
});
