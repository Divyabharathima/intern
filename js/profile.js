$(document).ready(function () {
  $.ajax({
    url: "/internship/php/profile.php",
    data: { gmail: localStorage.getItem('userEmail') },
    method: "POST",
    dataType: "json",
    success: function (response) {
      if (response.hasOwnProperty('user_data')) {
        var userData = response.user_data;

        // Update HTML elements with user data
        $('#name').text(userData.name);
        $('#age').text(userData.age);
        $('#date').text(userData.dob);
        $('#contact').text(userData.contact);
        $('#address').text(userData.address);

        // Edit page code
        // Retrieve the value from stored it in a variable
        var input1 = userData.name;
        var input2 = userData.age;
        var input3 = userData.dob;
        var input4 = userData.contact;
        var input5 = userData.address;

        // Set the value of the input box
        $('#name1').val(input1);
        $('#age1').val(input2);
        $('#date1').val(input3);
        $('#contact1').val(input4);
        $('#address1').val(input5);
      } 
    }
  });

  $('#myButton').click(function () {
    var condition = true;

    if (condition) {
      window.location.href = "/internship/views/profile_edit.html";
      console.log('User Email:', localStorage.getItem('userEmail'));
    }
  });

  function logout() {
    window.location.href = "login.html";
  }

  document.getElementById("logoutButton").addEventListener("click", logout);
});
