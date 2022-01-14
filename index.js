/**
 * Instructions:
 * • Always try to refresh the browser, or use live server
 * • Open the inspect window on chrome to see if there are any logs
 *
 *
 *
 * Steps:
 * 1. (100 points) Create a class Card that takes 2 properties `number`, and `color`
 * 2. (100 points) Create the constructor inside the class `Card` that initializes color and number
 * 3. (100 points) after creating the class, create 4 objects from the class Card for Green, Blue, Red, and Yellow cards, give them any numbers.
 * 4. (50 points) console.log every single object.
 * 5. (200 points) Add a method to class Card called `image()` that doesn't take any parameter, and it returns a string that represent the image path stored corresponding to card info
 *    The image path is as follows `./images/COLOR_NUMBER.png`
 *    Examples:
 *  - `./images/Blue_9.png`
 *  - `./images/Yellow_7.png`
 *  - `./images/Red_4.png`
 *  - `./images/Blue_8.png`
 * 6. (100 points) Add 3 cards to the array `cards` defined below by using `.push` method on the cards array
 *    Check the browser, you will see four cards!
 * 7. (1000 Points!)- great now you noticed that you created 4 objects manually, but that shouldn't be the case.
 *      the Uno deck includes 80 numbers (0-9 from each color)
 *
 *      it has four colors ["Yellow","Red","Blue","Green"]
 *    - Comment out the objects that you created
 *    - you should fill the cards dynamically, instead of the ones we created object by object,
 *      you need to use loops and fill the cards deck in a loop (Hint: You should use `for` loops, )
 *
 */
let cards = []; // You will use this array in step 6

// Continue the code here 👇🏻
class Card {
  // Green = 1;
  // Blue = 2;
  // Red = 3;
  // Yellow = 4;
  constructor(number, color) {
    this.number = number;
    this.color = color;
    if (color === "Yellow") {
      this.position = 0;
    } else if (color === "Blue") {
      this.position = 1;
    } else if (color === "Red") {
      this.position = 2;
    } else if (color === "Green") {
      this.position = 3;
    }
  }
  image() {
    return `./images/${this.color}_${this.number}.png`;
  }
}
function shuffle() {
  cards.sort(() => Math.random() - 0.5);
}
function unShuffle() {
  cards.sort((a, b) => a.number - b.number);
  cards.sort((a, b) => a.position - b.position);
}
const card = new Card(1, "yellow");
console.log(card);
const color = ["Yellow", "Blue", "Red", "Green"];
for (let j = 0; j < 4; j++) {
  // let color = "";
  // if (i === 0) {
  //   color = "Yellow";
  // } else if (i === 1) {
  //   color = "Blue";
  // } else if (i === 2) {
  //   color = "Red";
  // } else {
  //   color = "Green";
  // }
  for (let i = 0; i < 10; i++) {
    cards.push(new Card(i, color[j]));
    cards.push(new Card(i, color[j]));
  }
}

//shuffle();
for (let j = 0; j < 3; j++) {
  for (let i = 1; i < 7; i++) {
    setTimeout(function () {
      if (i === 6) {
        unShuffle();
        render(cards);
        console.log(cards);
      } else {
        shuffle();
        render(cards);
      }
    }, 3000 * (6 * j + i));
  }
}
//shuffle();
//unShuffle();
//console.log(cards[1]);
//cards.push(new Card(1, "Blue"));
//cards.push(new Card(1, "Yellow"));
//cards.push(new Card(1, "Green"));

/**
 *
 * Don't touch this code
 * This function is going to render the cards array to the HTML page,
 */
function render(array) {
  document.getElementById("cards-container").innerHTML = array
    .map(cardComponent)
    .join("");
}

render(cards);
