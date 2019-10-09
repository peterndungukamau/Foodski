//************* BUSINESS LOGIC AUTHENTICATION  *********//

//**************UI LOGIC *********//

$("document").ready(function() {
  //signup
  $("#signup-form").submit(function(event) {
    event.preventDefault();
    //user's data
    var username = document.getElementById("username").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    var existingUsers = JSON.parse(localStorage.getItem("allEntries"));
    if (existingUsers == null) existingUsers = [];
    var user = {
      username: username,
      email: email,
      password: password
    };
    localStorage.setItem("user", JSON.stringify(user));
    existingUsers.push(user);
    localStorage.setItem("allEntries", JSON.stringify(existingUsers));
    this.reset();
    window.location.replace("../login.html");
  });
  //sign in
  $("#login-form").submit(function(event) {
    event.preventDefault();
    var email = document.getElementById("my-email").value;
    var password = document.getElementById("my-password").value;
    var usersData = JSON.parse(localStorage.getItem("allEntries"));
    var emailArray = [];
    var passwordArray = [];
    usersData.forEach(function(user) {
      emailArray.push(user.email);
      passwordArray.push(user.password);
    });
    if (emailArray.includes(email) && passwordArray.includes(password)) {
      window.location.replace("../hotelsPage.html");
      // alert("Logged in successfull");
      $("#logout").show();
      $("#log").hide();
    } else {
      alert("Incorrect email or password");
    }

    this.reset();
  });
});
