<html>
    <p id="demo"></p>
</html>

var i = 0;
var txt = 'Welcome to Edwins Fastpages';
var speed = 50;

function typewriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML +=txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}