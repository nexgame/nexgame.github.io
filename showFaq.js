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
      response2 = "Generally, if your computer can run a game, it can be streamed on NexGame.";
      response3 = "We recommend using NexGame on a strong Wifi connection with a speed of at least 20 Mbps.";
      break;
    case 2:
      response1 = "NexGame creates a connection between your PC and your Mobile Device.";
      response2 = "We use this connection to stream a video game session from your PC to your Mobile Device.";
      response3 = "Your inputs to your Mobile Device are streamed back your PC, allowing you to play the game.";
      break;
    case 3:
      response1 = "NexGame has two components: NexGame Streamer and the NexGame App."
      response2 = "First, install the NexGame app on your Mobile Device. Create an account if you haven't already.";
      response3 = "Then, install NexGame Streamer on your PC and log in with your account.";
      response4 = "Finally, log into the NexGame app. You should be able to select your PC, connect to it, and launch a game.";
      break;
    case 4:
      response1 = "We know that you're trusting us with your devices. We take that seriously.";
      response2 = "All communications between your devices and our servers are encrypted.";
      response3 = "All data transmitted between your devices over connections created by NexGame are encrypted.";
      break;
    case 5:
      response1 = "Our goal is to only collect the data we need to provide you with a good experience.";
      response2 = "We use your IP Address to create a connection between your PC and Mobile Device.";
      response3 = "We send a list of the games installed on your computer to our servers, so that you can select which game to play.";
      response4 = "We don't sell your data. We don't share your data with any 3rd parties without asking first.";
      break;
    case 6:
      response1 = "NexGame's Open Beta is free because the feedback we get from you is valuable."
      response2 = "Our goal with the NexGame Open Beta is to get genuine feedback on the quality of our service."
      response3 = "We'll use this feedback to improve our product and monetize at a later date."
      response4 = "In the future, NexGame may monetize through a monthly subscription or advertizing. However, we do not sell your data."
      break;
    case 7:
      response1 = "If our software can launch a game on your computer, you can play it on NexGame"
      response2 = "NexGame Streamer automatically discovers games installed on your computer at startup."
      response3 = "We integrate with many of the most common game platforms so that you can play all of your games."
      response4 = "Is there a game you'd like to see on NexGame? Let us know, and we'll do our best to add it!"
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
