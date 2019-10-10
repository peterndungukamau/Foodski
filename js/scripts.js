//************* BUSINESS LOGIC *********//
function Food(food, quantity, price, totalPrice) {
  this.food = food;
  this.quantity = quantity;
  this.price = price;
  this.totalPrice = totalPrice;
}

//**************UI LOGIC *********//

$("document").ready(function() {
  //get quantity value
  var quantity = parseInt($("#quantity").text());
  var quantity2 = parseInt($("#quantity2").text());
  var quantity3 = parseInt($("#quantity3").text());
  var quantity4 = parseInt($("#quantity4").text());
  //increment
  $("#add, #add2,add3,#add4").click(function() {
    quantity += 1;
    $("#quantity, #quantity2 ,#quantity3,#quantity4").text(quantity);
    $("#price").text(quantity * 100);
    $("#price2").text(quantity * 150);
    $("#price3").text(quantity * 200);
    $("#price4").text(quantity * 80);
  });
  //decrement
  $("#subtract, #subtract2 ,#subtract3,#subtract4").click(function() {
    quantity -= 1;
    if (quantity < 1) {
      return (quantity = 1);
    }
    $("#quantity, #quantity2, #quantity3,#quantity4").text(quantity);
    $("#price").text(quantity * 100);
    $("#price2").text(quantity * 150);
    $("#price3").text(quantity * 200);
    $("#price4").text(quantity * 80);
  });
  //Add to cart
  $("#orderbtn, .githe1, .githe2, .githe3, .githe4, .githe5, .githe6").click(
    function() {
      window.location.href = "./orders.html?hidemyShoppingCart=1";
    }
  );
  if (window.location.search.indexOf("hidemyShoppingCart=1") != -1) {
    $(".myShoppingCart").hide();
    $(".viewOrders").show();
  }
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
