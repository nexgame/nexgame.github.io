var i = 0;
var message = "Any Game. Any Device. Anywhere."
var delay = 50;

function writeText(){
  if (i < message.length){
    document.getElementById("typedTitle").innerHTML += message.charAt(i);
    if (message.charAt(i) == ".") {
      delay = 150;
    }
    else {
      delay = 60;
    }
    i++;
    setTimeout(writeText, delay);
  }
}
