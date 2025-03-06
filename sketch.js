let song1, song2, song3;
let button1, button2, button3, button4;
let songindex = 0;
let currentImage = null;
let image1, image2, image3;

function preload() {
  song1 = loadSound('song1.mp3');
  song2 = loadSound('song2.mp3');
  song3 = loadSound('song3.mp3');
  mic = loadImage("images/mic.png");
  image1 = loadImage("images/image1.jpg");
  image2 = loadImage("images/image2.jpg");
  image3 = loadImage("images/image3.jpg");
  lights = loadImage("images/lights.gif")
}

function setup() {
  createCanvas(400, 400);
  background(0);

  fill(255);
  textSize(30);
  text('Welcome to Klutzy Karaoke!', 10, 40);
  fill(255, 204, 0);
  textSize(20);
  text('Sing a song, two, or three!', 80, 70);
  
  // Create buttons for each song
  button1 = createButton('Sing Song 1');
  button1.position(50, 350);
  button1.mousePressed(() => playSong(song1));

  button2 = createButton('Sing Song 2');
  button2.position(150, 350);
  button2.mousePressed(() => playSong(song2));

  button3 = createButton('Sing Song 3');
  button3.position(250, 350);
  button3.mousePressed(() => playSong(song3));

  button4 = createButton('Stop Song');
  button4.position(300, 90);
  button4.mousePressed(() => {
    song1.stop()
    song2.stop();
    song3.stop();
  });
  
}

function playSong(song) {
  // Stop all songs before playing a new one
  song1.stop();
  song2.stop();
  song3.stop();
  
  // Play the selected song
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    // button1("pause");
  }

  else {
    song.pause();
    // button.html("play");
  }
}

// if (currentImage) {
//   image(mic, 100, 100, 200, 200);
// }

function draw() {
  if (song1.isPlaying()){
    songindex = 1;
  }
  else if (song2.isPlaying()){
    songindex = 2;
  }
  else if (song3.isPlaying()){
    songindex = 3;

  }

  image(mic,50,200,300,300);


  if (songindex == 1){
    image(image1,50,100,300,200);
    image(lights,50,0,300,20);
  }
  else if (songindex == 2){
    image(image2,50,100,300,200);
    image(lights,50,0,300,20);
  }
  else if (songindex == 3){
    image(image3,50,100,300,200);
    image(lights,50,0,300,20);
    if (songindex == 1){
    }
  } // else {
  //   //default display
  // }
}
  // based on button input change song index and display corresponding image 
  