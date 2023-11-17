document.getElementById('donationForm').addEventListener('submit', function(event) {
	event.preventDefault();
  
	// Retrieve form values
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const amount = document.getElementById('amount').value;
	const message = document.getElementById('message').value;
  
	// You can perform further actions here, like sending the form data to a server using AJAX/fetch
  
	// For demonstration purposes, let's log the form data to the console
	console.log('Name:', name);
	console.log('Email:', email);
	console.log('Amount:', amount);
	console.log('Message:', message);
  
	// Optionally, you can reset the form after submission
	// document.getElementById('donationForm').reset();
  });
  