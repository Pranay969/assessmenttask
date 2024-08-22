// IIFE to encapsulate the code and avoid polluting the global namespace
(function() {
    // Function to toggle the chat form visibility
    function toggleForm() {
        const form = document.getElementById("myForm");
        form.classList.toggle("show");
    }

    // Add event listener to the chat button to toggle the form
    document.querySelector(".open-button").addEventListener("click", toggleForm);

    // Add event listener to the cancel button to toggle (close) the form
    document.querySelector(".form-container .cancel").addEventListener("click", toggleForm);
})();

// CSS for smooth transitions
document.write(`
<style>
  .chat-popup {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    visibility: hidden;
  }
  .chat-popup.show {
    opacity: 1;
    visibility: visible;
  }
</style>
`);
