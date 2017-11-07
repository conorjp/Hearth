var c = document.getElementById("demoCanvas1");
var ctx = c.getContext("2d");
ctx.lineWidth="4";
ctx.strokeStyle="black";
ctx.rect(2,2,100,100);
ctx.fillStyle = "#CC100B";
ctx.fillRect(2,2,100,100);
ctx.rect(102,20,120,130);
ctx.fillStyle = "#41ACFF";
ctx.fillRect(102,20,120,130);
ctx.rect(222,20,98,78);
ctx.fillStyle = "#4077bc";
ctx.fillRect(222,20,98,78);
ctx.stroke();
ctx.font = "15px Arial"
ctx.fillStyle = "black";
ctx.fillText("Bedroom",20,40);
ctx.fillText("75 degrees",14,56);
ctx.fillText("Living Room",120,80);
ctx.fillText("66 degrees",125,96);
ctx.fillText("Kitchen",246,60);
ctx.fillText("62 degrees",234,76);


var d = document.getElementById("demoCanvas2");
var dtx = d.getContext("2d");
dtx.lineWidth="4";
dtx.strokeStyle="black";
dtx.rect(2,2,100,100);
dtx.fillStyle = "#452259";
dtx.fillRect(2,2,100,100);
dtx.rect(102,20,120,130);
dtx.fillStyle = "#452259";
dtx.fillRect(102,20,120,130);
dtx.rect(222,20,98,78);
dtx.fillStyle = "#452259";
dtx.fillRect(222,20,98,78);
dtx.stroke();
dtx.font = "15px Arial"
dtx.fillStyle = "white";
dtx.fillText("Bedroom",20,40);
dtx.fillText("71 degrees",14,56);
dtx.fillText("Living Room",120,80);
dtx.fillText("71 degrees",125,96);
dtx.fillText("Kitchen",246,60);
dtx.fillText("71 degrees",234,76);