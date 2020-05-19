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
  var url = "https://nexgame.hopto.org:58443/api/register";
  fetch(url, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then(res=>res.json())
    .then(res => console.log(res));
  alert(res);
}
