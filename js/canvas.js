var c = document.getElementById("demoCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,0);
ctx.lineTo(200,200);
ctx.lineTo(0,200);
ctx.lineTo(0,0);
ctx.stroke();