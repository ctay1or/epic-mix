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
  mixInfo (epicMix);
});

total.innerText = `${epicMix.length} great songs!`;

const mixInfo = function (mix) {
  mix.forEach (function (song, index) {
    let listItem = document.createElement("li");
    listItem.classList.add("song");
    listItem.innerHTML = `<span class = "song-number">#${index + 1}</span> ${song}`;
    mixList.append(listItem);
  });
};