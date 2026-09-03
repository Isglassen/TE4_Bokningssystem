const bookingForm = document.querySelector("#bookingForm");
bookingForm.addEventListener("submit", function (event) {
	const formData = new FormData(bookingForm);
	const nameInput = formData.get("name");
	const emailInput = formData.get("email");
});