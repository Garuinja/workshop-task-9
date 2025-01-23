let webcam;
let blocks = [];
let circles = [];
let moverect = 0;
let constant = true;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  webcam = createCapture(VIDEO);
  webcam.size(400,400);
  webcam.hide();
  for(i = 0; i < 500; i++){
    // if(i % 2 == 0){
    //   blocks[i] = new MovRect(0, i * 20, 20, 20);
    // }else{
    //   blocks[i] = new MovRect(width - 20, i * 20, 20 ,20);
    // }
    let x = random(0, width - 20);
    let y = random(0, width - 20);
    blocks[i] = new MovRect(x, y, 20, 20);
    x = random(0, width);
    y = random(0, width)
    let d = random(0, 50)
    circles[i] = new Particles(x, y, d);
  }
}

function draw() {
  background(220);
  // image(webcam, 0, 0);
  // let pixelColour = webcam.get(20, 20);
  // fill(pixelColour[0], pixelColour[1], pixelColour[2]);
  for(i = 0; i < blocks.length; i++){
    blocks[i].checkEdges();
    blocks[i].move();
    blocks[i].show();
    circles[i].move();
    circles[i].show();
    circles[i].checkEdges();
  }
}

class MovRect{
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.modifier = 1
  }

  move(){
    this.x = this.x + this.modifier;
  }

  show(){
    let pixelColour = webcam.get(this.x, this.y);
    noStroke();
    fill(pixelColour[0], pixelColour[1], pixelColour[2]);
    rect(this.x, this.y, this.w, this.h);
  }

  checkEdges(){
    if(this.x == 0){
      this.modifier = 1;
    }else if(this.x >= width - 20){
      this.modifier = -1;
    }
  }
}

class Particles{
  constructor(x, y, d){
    this.x = x;
    this.y = y;
    this.d = d;
  }
  move(){
    this.x += random(-3, 3);
    this.y += random(-3, 3);
  }
  show(){
    let pixelColour = webcam.get(this.x, this.y);
    noStroke();
    fill(pixelColour[0], pixelColour[1], pixelColour[2]);
    circle(this.x, this.y, this.d);
  }
  checkEdges(){
    if(this.x > width - this.d){
      this.x = width - this.d;
    }else if(this.x < this.d){
      this.x = this.d;
    }
    if(this.y < this.d){
      this.y = this.d;
    }else if(this.y > width - this.d){
      this.y = width - this.d;
    }
  }
}