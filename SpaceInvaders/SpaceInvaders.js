let PlayerPosition = 50;

function LaserStart() {
 document.getElementByClassName("Laser").style.display = "none";
}
function Start() {
 document.getElementById("Start").style.display = "none";
 document.getElementById("Player").style.display = "block";
}
document.addEventListener('keydown', function(event) {
 if (event.code == "ArrowLeft") {
  if (PlayerPosition > 1){PlayerPosition -= 1;}
  document.getElementById("Player").style.left = PlayerPosition + "%";
 }
 if (event.code == "ArrowRight") {
  if (PlayerPosition < 96){PlayerPosition += 1;}
  document.getElementById("Player").style.left = PlayerPosition + "%";
 }
});
document.addEventListener('keyup', function(event) {
 if (event.code == "Space") {
 var img = document.createElement("img");
 img.src = "SpaceInvaderLaser.png";
 img.classList.add("Laser")
 img.style.left = PlayerPosition + 0.825 + "%";
 img.style.bottom = 8 + "%";
 document.getElementById("Body").appendChild(img);
 console.log(a);
 }
});
function ShootLaser() {
 var Lasers = document.getElementsByClassName("Laser");
 for (let a = 0; a<Lasers.length; a++){
  var LaserHeight = parseInt(Lasers[a].style.bottom);
  LaserHeight += 1;
  Lasers[a].style.bottom = LaserHeight + "%";
  if (LaserHeight >= 90){
   RemoveLaser(Lasers[a])
  }
 }
}
function RemoveLaser(img){
 img.parentNode.removeChild(img)
}
setInterval(ShootLaser, 15);

var Enemy = document.createElement('Enemy');
Enemy.src = "SpaceInvaderEnemy.png";