song1 = ""; 
song2 = ""; 
song1_status = "";
song2_status = "";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
function preload(){
    song=loadSound("music.mp3");
    song=loadSound("music2.mp3")
}
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide()
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);

}
function modelLoaded(){
    console.log('Posenet Is Initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        scoreRightWrist=results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist =" + scoreRightWrist +"scoreLeftWrist =" + scoreLeftWrist)
        console.log("scoreLeftWrist="+scoreLeftWrist);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX+"leftWristY ="+ leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX =" + rightWristX+"rightWristY ="+ rightWristY);
    }
}
function draw(){
    image(video,0,0,600,500);
    song1_status=song1.isplaying();
    song2_status=song2.isplaying();
    fill("#DDA0DD");
    stroke("#DDA0DD");
   if (scoreRightWrist > 0.2){
       circle(rightWristX,rightWristY,20);
       song2.stop();
if(song_status == false){
    song1.play();
    document.getElementById("song").innerHTML="playing harry potter song";
}

   }
   if (scoreLeftWrist > 0.2){
    circle(leftWristX,leftWristY,20);
    song1.stop();
if(song_status == false){
 song2.play();
 document.getElementById("song").innerHTML="playing peter pan song";
}

}
   
   
}
function play(){
    song.play();
    song.setVolume(1);
 song.rate(1);
  
}
