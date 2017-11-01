var c = document.getElementById("demoCanvas1");
var ctx = c.getContext("2d");
var d = document.getElementById("demoCanvas2");
var dtx = d.getContext("2d");
ctx.fillStyle = "#CC100B";
ctx.fillRect(0,0,150,150);
ctx.fillStyle = "#41ACFF";
ctx.fillRect(150,40,190,210);
ctx.fillStyle = "#4077bc";
ctx.fillRect(340,40,150,110);

dtx.fillStyle = "#452259";
dtx.fillRect(0,0,150,150);
dtx.fillStyle = "#452259";
dtx.fillRect(150,40,190,210);
dtx.fillStyle = "#452259";
dtx.fillRect(340,40,150,110);

