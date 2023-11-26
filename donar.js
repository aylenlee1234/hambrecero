document.getElementById('donationForm').addEventListener('submit', function(event) {
	event.preventDefault();
  
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const amount = document.getElementById('amount').value;
	const message = document.getElementById('message').value;
  
	console.log('Name:', name);
	console.log('Email:', email);
	console.log('Amount:', amount);
	console.log('Message:', message);
  });

  // JavaScript code
function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission

    // You can add form validation or AJAX request here before showing the popup

    openPopup(); // Show the popup after the form is submitted
}

let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

popupButton.addEventListener('click', function() {
    closePopup(); // Close the popup when "OK" button is clicked
});

  