var i=0;
var poze = ["cpu.jpg","memory.jpg","disk.jpg","ports.jpg"];
function functie(){
//poze[i%4].style.display="block";
document.getElementById("p").innerHTML = "<img id=\"p\" src=\""+poze[i%4]+"\">";
document.getElementById('p1').style.display='none';
document.getElementById('p2').style.display='none';
document.getElementById('p3').style.display='none';
document.getElementById('p4').style.display='none';
++i;
setTimeout(functie, 3000);
 
}