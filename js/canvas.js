var c = document.getElementById("demoCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(150,0);
ctx.lineTo(150,150);
ctx.lineTo(0,150);
ctx.lineTo(0,0);
ctx.fillStyle = "white";
ctx.fillRect(0,0,150,150);
ctx.stroke();

ctx.moveTo(150,40);
ctx.lineTo(300,40);
ctx.lineTo(300,190);
ctx.lineTo(0,190);
ctx.lineTo(0,0);
// ctx.fillStyle = "white";
// ctx.fillRect();
ctx.stroke();