function submitRegistration() {
    var name = $("#name").val();
    var age = $("#age").val();
    var dob = $("#dob").val();
    var gender = $("#gender").val();
    var qualification = $("#qualification").val();
    var hobbies = $("#hobbies").val();
    var address = $("#address").val();

    // Save the registration details to local storage
    saveToLocalStorage({
        name: name,
        age: age,
        dob: dob,
        gender: gender,
        qualification: qualification,
        hobbies: hobbies,
        address: address
    });

    // Display the registration details
    displayRegistrationDetails();
}

function saveToLocalStorage(user) {
    // Get existing user data from local storage
    var userList = JSON.parse(localStorage.getItem("userList")) || [];

    // Add the new user data
    userList.push(user);

    // Save the updated user data to local storage
    localStorage.setItem("userList", JSON.stringify(userList));
}

function displayRegistrationDetails() {
    // Hide the registration form
    $("#registrationForm").hide();

    // Show the registration details div
    $("#registrationDetails").show();

    // Retrieve the last registered user from local storage
    var userList = JSON.parse(localStorage.getItem("userList")) || [];
    var lastUser = userList[userList.length - 1];

    // Display the details on the page
    var userDetailsList = $("#userDetailsList");
    userDetailsList.empty();

    for (var key in lastUser) {
        var listItem = $("<li>").text(`${key}: ${lastUser[key]}`);
        userDetailsList.append(listItem);
    }
}
          