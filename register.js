async function sendPostRequest(){
  // Get data from form
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  // var dob = document.getElementById("dob").value;
  var password = document.getElementById("password").value;
  var verifypw = document.getElementById("verifypw").value;
  // var country = document.getElementById("country").value;
  // Make sure passwords match
  if (password.trim() !== verifypw.trim()){
    document.getElementById("response").innerHTML = "ERROR: Password mismatch.";
    return -1;
  }
  // Make sure inputs are valid
  if (firstname.trim().length < 1){
    document.getElementById("response").innerHTML = "ERROR: Please enter your first name.";
    return -1;
  }
  if (lastname.trim().length < 1){
    document.getElementById("response").innerHTML = "ERROR: Please enter your last name.";
    return -1;
  }
  if (username.trim().length < 3){
    document.getElementById("response").innerHTML = "ERROR: Your username must be at least 3 characters.";
    return -1;
  }
  if (!email.includes("@")){
    document.getElementById("response").innerHTML = "ERROR: Please provide a valid email address.";
    return -1;
  }
  if (password.trim().length < 8){
    document.getElementById("response").innerHTML = "ERROR: Your password must be at least 8 characters.";
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
  payload['country'] = 'USA';
  payload['dateOfBirth'] = '1/22/1969';
  // Send POST request
  var url = "https://nexgame.hopto.org:58443/api/register";
  const response = await fetch(url, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  const json = await response.json();
  if (json.status === "ERROR"){
    if (json.error === "USER EXISTS"){
      document.getElementById("response").innerHTML = "ERROR: That username already taken.";
      return -1;
    }
    if (json.error === "EMAIL EXISTS"){
      document.getElementById("response").innerHTML = "ERROR: That email is already in use.";
    }
  }
  if (json.status === "OK"){
    document.getElementById("response").innerHTML = "SUCCESS! Welcome to NexGame.";
    return 0;
  }
}

function sendRegisterRequest(){
  sendPostRequest();
}
