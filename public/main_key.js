var video;

var vScale = 2;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.hide();
  frameRate(20);
  mic = new p5.AudioIn()
  mic.start();
  // video.size(600, 600);
}

function draw() {
  background(51);
  image(video, 0, 0, 600, 600);

  const UPPER_LIMIT = 100;

  // video.loadPixels();
  // loadPixels();
  mic.amp(1);
  var posterizeValue = .5 / mic.getLevel(.9);//slider.value / 5;
  console.log(posterizeValue);
  if(posterizeValue < 2) posterizeValue = 2;
  else if (posterizeValue > UPPER_LIMIT) posterizeValue = UPPER_LIMIT;

  (mic.getLevel(.9)) > .23 ? filter(INVERT) : null;
  filter(BLUR, mic.getLevel(.9) * 8);
  filter(POSTERIZE, posterizeValue);

}
