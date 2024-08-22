document.getElementById("chatForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent the form from submitting normally

    // Hide the form container
    document.querySelector(".form-container").style.display = "none";

    // Show the message sent container
    document.getElementById("messageSent").style.display = "block";
});

function goBack() {
    // Hide the message sent container
    document.getElementById("messageSent").style.display = "none";

    // Show the form container
    document.querySelector(".form-container").style.display = "block";

    // Clear the message input
    document.getElementById("msg").value = "";
}
