function sendRegisterRequest(){
  // Get data from form
  var firsname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var dob = document.getElementById("dob").value;
  var password = document.getElementById("password").value;
  var verifypw = document.getElementById("verifypw").value;
  var country = document.getElementById("country").value;
  // Make sure passwords match
  if (password.trim() !== verifypw.trim()){
    document.getElementById("response").innerHTML = "ERROR: Password mismatch.";
    return -1;
  }
  // Format POST request
  var payload = {};
  payload['username'] = username;
  payload['email'] = email;
  payload['encryptedPassword'] = password;
  payload['firsname'] = firstname;
  payload['lastname'] = lastname;
  payload['gender'] = 'Q';
  payload['country'] = country;
  payload['dateOfBirth'] = dob;
  // Send POST request
  var xhr = new XMLHttpRequest();
  var url = "https://nexgame.hopto.org:58443/api/register";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          // If error, display useful message
          if (response.status==="ERROR"){
            if (response.error==="USER EXISTS"){
              document.getElementById("response").innerHTML = "ERROR: That username is already taken.";
              return -1;
            }
            if (response.error==="EMAIL EXISTS"){
              document.getElementById("response").innerHTML = "ERROR: That email is already in use.";
              return -1;
            }
            document.getElementById("response").innerHTML = "ERROR: Something went wrong. Try again";
            return -1;
          }
          // If OK, redirect to "Welcome" page
          if (response.status="OK"){
            document.getElementById("response").innerHTML = "SUCCESS! Welcome to NexGame.";
            return 0;
          }
      }
      else if (xhr.readyState === 4){
        alert(xhr.status);
      }
  };
  var data = JSON.stringify(payload);
  xhr.send(data);
}
