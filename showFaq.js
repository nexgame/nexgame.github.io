function showFaq(messageValue){
  var response1 = null;
  var response2 = null;
  var response3 = null;
  var response4 = null;
  // Get message
  switch(messageValue){
    case 0:
      response1 = "NexGame is a video game streaming service that lets you play PC games on your mobile devices.";
      break;
    case 1:
      response1 = "NexGame's Open Beta will support Windows and Android.";
      response2 = "We recommend using NexGame on a strong Wifi connection with a speed of at least 30 Mbps.";
      response2 = "Generally, if your computer can run a game, it can be streamed on NexGame.";
      break;
    case 2:
      response1 = "NexGame creates a connection between your PC and your Mobile Device.";
      response2 = "We use this connection to stream the video game session from your PC to your Mobile Device.";
      response3 = "Your inputs to your Mobile Device are streamed back your PC, allowing you to play the game.";
      break;
    case 3:
      response1 = "NexGame has two components: NexGame Streamer and the NexGame App."
      response2 = "First, install the NexGame app on your Mobile Device. Create an account if you haven't already.";
      response3 = "Then, install NexGame Streamer on your PC and log in with your account.";
      response4 = "Finally, log into the NexGame app. You should be able to select your PC and connect to it.";
      break;
    case 4:
      response1 = "We know that you're trusting us with your devices. We take that seriously.";
      response2 = "All communications between your devices and our servers are encrypted using SSL/TLS (HTTPS, or RSA and AES).";
      response3 = "All data transmitted between your devices over connections created by NexGame are encrypted using RSA and AES.";
      break;
    case 5:
      response1 = "Our goal is to only collect the data we need to provide you with a good user experience.";
      response2 = "We use your IP Address to create a connection between your PC and Mobile Device.";
      response3 = "We send a list of the games installed on your computer to our servers, so that you can select which game to play.";
      response4 = "We don't sell your data or share it with any 3rd parties.";
      break;
  }
  // Set text
  if (response1 != null){
    document.getElementById("response1").innerHTML = response1;
  }
  else {
    document.getElementById("response1").innerHTML = "";
  }
  if (response2 != null){
    document.getElementById("response2").innerHTML = response2;
  }
  else {
    document.getElementById("response2").innerHTML = "";
  }
  if (response3 != null){
    document.getElementById("response3").innerHTML = response3;
  }
  else {
    document.getElementById("response3").innerHTML = "";
  }
  if (response4 != null){
    document.getElementById("response4").innerHTML = response4;
  }
  else {
    document.getElementById("response4").innerHTML = "";
  }
}
