// script.js
function getFormValue() {
    // Get the form element
    const form = document.getElementById("myForm");

    // Get the values of the first name and last name fields
    const firstName = form.elements.fname.value;
    const lastName = form.elements.lname.value;

    // Display the full name using an alert
    alert(firstName + " " + lastName);
}
