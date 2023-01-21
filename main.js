noseX=0;
noseY=0;
function preload(){
    clown_nose=loadImage("https://o.remove.bg/downloads/0322a141-272b-42a2-ac7a-c57222cb5024/360_F_231423149_ldug4Sv3LV2FBLGt5sAQ91c2iYvntCXU-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x-30;
    noseY=results[0].pose.nose.y+5;
}
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,70,30);
}
function take_snapshot(){
    save("myfilterimage.png");
}
