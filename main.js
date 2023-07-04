thornozeloEX = 0
thornozeloEY = 0
conE = 0
conD = 0
thornozeloDX = 0
thornozeloDY = 0
r = 1
function setup() {
  canvas = createCanvas(600, 500);
  video = createCapture(VIDEO);
  canvas.center()
  video.hide()
  poseNet = ml5.poseNet(video, modelo);
  poseNet.on('pose', gotPoses)
}

  function preload() {
    song = loadSound("coisinha.mp3")


}

function draw() {
  
  image(video, 0, 0, 600, 500)
  stroke("red")
  fill("red")

  if (conE > 0.2) {
    circle(thornozeloEX, thornozeloEY, 20)
    LeftWristNumero = Number(thornozeloEY)
    ajustado = floor(LeftWristNumero)
    volume = ajustado / 500
    document.getElementById("cb").innerHTML = "volume = " + volume.toFixed(2);
  
    song.setVolume(volume)

  }
  stroke("red")
  fill("red")
  circle(thornozeloDX, thornozeloDY, 20)

  if(thornozeloDY > 0 &&  thornozeloDY <= 100)
  {
    document.getElementById("nj").innerHTML= "velocidade = o.5x";
    r = 0.5
   
    
  }
  else if(thornozeloDY > 100 &&  thornozeloDY <= 200)
  {

    document.getElementById("nj").innerHTML= "velocidade = 1x";
    r = 1



  }
  
  else if(thornozeloDY > 200 &&  thornozeloDY <= 300)
  {

    document.getElementById("nj").innerHTML= "velocidade = 1.5x";
    r = 1.5



  }


  else if(thornozeloDY > 300 &&  thornozeloDY <= 400)
  {

    document.getElementById("nj").innerHTML= "velocidade = 2x";
    r = 2



  }

  else if(thornozeloDY > 400)
  {

    document.getElementById("nj").innerHTML= "velocidade = 2.5x";
    r = 2.5



  }

song.rate(r);
}


function milhas() {

  song.play()
}

function modelo() {
  console.log("serto")
}


function gotPoses(results) {
  if (results.length > 0) {
    console.log(results)

    thornozeloEY = results[0].pose.leftWrist.y;
    thornozeloEX = results[0].pose.leftWrist.x;
    thornozeloDY = results[0].pose.rightWrist.y;
    thornozeloDX = results[0].pose.rightWrist.x;

    console.log(thornozeloEX + "tornozeloEX")
    console.log(thornozeloDY + "tornozeloDY")
    conE = results[0].pose.leftWrist.confidence;
    conD = results[0].pose.rightWrist.confidence;
  
  }
}