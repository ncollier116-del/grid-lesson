let cellSize = 55;
function setup() {
  createCanvas(1000, 1000);
  noLoop();
  noStroke();
  angleMode(DEGREES)
}

function draw() {
  background(201, 10, 100);
  for(let y = 0; y < height; y += cellSize) {
    for(let x = 0; x < width; x += cellSize) {

      //perlin noise 
      let n = noise(x * 0.005, y * 0.005)
      fill(180, 55 + n * 130, 80)
     // fill(noise(x * 0.01, y * 0.01) * 255)
     // rect(x, y, cellSize)
     //x += cellSize/2;
    // y += cellSize/2;
     let r = random (1)
     if(r < .25){
       strokeWeight(10);
        stroke(201);
        square(20, 20, 60);
      fill(0, 55 + n * 330, 380)
      arc(x+cellSize/2, y+cellSize/2, cellSize, cellSize, 0, 180)
     }else if (r < .40){

      strokeWeight(20);
      stroke(140);
      square(20, 20, 60);
      arc(x+cellSize/2, y+cellSize/2, cellSize, cellSize, 90, 280)
     }else if (r < .100){
       fill(0, 15 + n * 30, 80)
      arc(x+cellSize/2, y+cellSize/2, cellSize, cellSize, 180, 360)
     }else{
      arc(x+cellSize/2, y+cellSize/2, cellSize, cellSize, 80, 390)
     }
     
    }
  }
}
