


function preload() {
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_gameover=loadSound("gameover.wav");
	world_start = loadSound("world_start.wav");
	mario_kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	poseNet=ml5.poseNet(video,modelloaded);
	poseNet.on("pose",gotposes);
}
function modelloaded(){
	console.log("modelloaded");
}
function gotposes(results){
if(results.length>0){
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log(noseX,noseY);
}
}


function draw() {
	game()
}






