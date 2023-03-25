const farmAnimals = "cow horse sheep pig chicken";
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};
const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along",
    },
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy",
};

const farmAnimalsArr = farmAnimals.split(" ");
// console.log(farmAnimalsArr)

const [moo, neigh, baa, oink, cluck] = farmAnimalsArr;
// console.log(moo)

const [bessie, , dolly, babe, little] = farmAnimalsArr;
// console.log(dolly)

const [blackAndWhite, , black, pink] = farmAnimalsArr;
// console.log(pink)

const [red, orange, yellow, green, blue, indigo, violet] = colors;

const [r, o, y, g, b, , v] = colors;

const indg = colors[5];

const { muppetName, color, song, job, partner } = muppet;
// console.log(muppetName)
// console.log(color)

const { nestedPartner, nestedJob } = nestedMuppet;
console.log(nestedJob);
console.log(nestedPartner);

const { song2, song4 } = nestedMuppet.album.theMuppetMovie;
console.log(song2);
console.log(song4);
