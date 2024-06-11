const epicMix = [
  "Shine",
  "Number One Fan",
  "Did You Know",
  "Dear John",
  "Feel Like Hell Today",
  "Fight Song",
  "Poker Face",
  "Narcissist",
  "Bring Me To Life",
  "She Let Herself Go",
  "Out Is Through",
  "You Say"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
});
