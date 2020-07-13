var i = 0;
var message = "Any Game. Any Device. Anywhere."
var delay = 50;

function writeText(){
  if (i < message.length){
    document.getElementById("typedTitle").innerHTML += message.charAt(i);
    if (message.charAt(i) == ".") {
      delay = 200;
    }
    else {
      delay = 70;
    }
    i++;
    setTimeout(writeText, delay);
  }
}
