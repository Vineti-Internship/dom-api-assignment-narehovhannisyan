function draw(){

	var canvas = document.createElement('canvas');
	canvas.width = 500;
	canvas.height = 500;


	var isrotating = false;
	const rotateButton = document.createElement("button")
	const rotate = document.createTextNode("Rotate")
	rotateButton.appendChild(rotate)
	rotateButton.style.height = '50px'
	rotateButton.style.fontSize = '20px'

	const stopButton = document.createElement("button");
	const stop = document.createTextNode("Stop")
	stopButton.appendChild(stop)
	stopButton.style.height = '50px'
	stopButton.style.fontSize = '20px'

	rotateButton.onclick = function() {
		isrotating = true
	}

	stopButton.onclick = function() {
		isrotating = false
	}
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(rotateButton)
	body.appendChild(stopButton)
	body.appendChild(canvas);


var raf = window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame;

var i = 0
function Update() {

 	var ctx = canvas.getContext("2d");
 	ctx.clearRect(0,0,canvas.width,canvas.height);

	ctx.beginPath()
	ctx.arc(250,250,100,0,Math.PI * 2, true);
	ctx.stroke()
	var items = 200;
    var x = 250 + 100 * Math.cos(2 * Math.PI * i / items);
    var y = 250 + 100 * Math.sin(2 * Math.PI * i / items);  

    ctx.beginPath()
    ctx.arc(x,y,50,0,Math.PI*2,false)
    ctx.lineWidth = 2
    ctx.stroke()
    if (isrotating) {
       	i+=1
    }
      	raf(Update)
}
raf(Update)

}