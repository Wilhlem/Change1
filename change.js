let archivo
let word = []
let bot = []
let wordArray1

function preload() {

  archivo = loadFont('ArchivoBlack-Regular.ttf');

}

function setup() {
  createCanvas(windowWidth, windowHeight)
  textFont(archivo)
  
  

  wordArray1 = archivo.textToPoints('CHANGE', width / 2  -330, height / 2 + 140, 115)

  for (let i = 0; i < wordArray1.length; i++) {

    word[i] = new Word(wordArray1[i].x, wordArray1[i].y)

  }

  for (let i = 0; i < 40; i++) {

    bot[i] = new Bot()

  }

  print(wordArray1.length, bot.length)
}

function draw() {
  background(255)
  

  for (let i = 0; i < bot.length; i++) {

    bot[i].show()
    bot[i].move()
    bot[i].collisionDetection()

  }

  for (let i = 0; i < word.length; i++) {

    word[i].show()

  }

}

class Word {

  constructor(x, y) {
    this.x = x
    this.y = y
  }

  show() {
    
    
    push(); // Start a new drawing state
    strokeWeight(2)
    fill(255, 0, 0)
    translate(50, 0)
    ellipse(this.x, this.y, 5, 5)
    pop()
  }

}

class Bot {

  constructor() {
    this.x = random (400,400)
    this.y = random(250, 650)
    this.s = random(5, 10);
    this.direction = random(-1, 1)
    this.direction1 = random(-1, 1)
    this.d;
  }

  show() {
    rect(this.x, this.y, this.s, this.s)
  }

  move() {

    this.x = this.x + this.direction
    this.y = this.y + this.direction1

    if (this.x > width || this.x < 0) {
      this.direction = -this.direction
    }

    if (this.y > width || this.y < 0) {
      this.direction1 = -this.direction1
    }
  }

  collisionDetection() {

    for (let i = 0; i < word.length; i++) {
      this.d = dist(word[i].x, word[i].y, this.x, this.y)

      if (this.d < 5) {
        this.direction = -this.direction

        this.direction1 = -this.direction1

        word.splice(i, 1)
      }

    }
  }

}