import { getRooms } from "./roomData.js";

const roomSelect = document.querySelector("#room-select");

Object.values(getRooms()).forEach(v => {
	const option = roomSelect.appendChild(document.createElement("option"));
	option.value = v.id;
	option.textContent = v.name;
})

const bookingForm = document.querySelector("#bookingForm");
const checkBox = document.querySelector("#terms")
const errorMessageArea = document.querySelector("#errorMessageArea")

function nameInputValidation(nameInput) {
	if (nameInput.trim() == "") {
		return { correct: false, errorMessage: "Name can't be empty!" }
	}
	else {
		return { correct: true }
	}
}

function emailInputValidation(emailInput) {
	if (!emailInput.trim()) {
		return { correct: false, errorMessage: "Email can't be empty!" }
	}
	if (!emailInput.trim().includes("@")) {
		return { correct: false, errorMessage: "Invalid email!" }
	}
	return { correct: true }
}

function roomInputValidation(roomInput) {
	if (!roomInput) {
		return { correct: false, errorMessage: "No room selected!" }
	}
	return { correct: true }
}

function dateValidation(date) {
	if (!date) {
		return { correct: false, errorMessage: "No date entered!" }
	}
	return { correct: true }
}

function startValidation(start) {
	if (!start) {
		return { correct: false, errorMessage: "No start time entered!" }
	}
	return { correct: true }
}

function endValidation(end) {
	if (!end) {
		return { correct: false, errorMessage: "No end time entered!" }
	}
	return { correct: true }
}

function nrOfParticipantsValidation(nrOfParticipants) {
	if (isNaN(nrOfParticipants)) {
		return { correct: false, errorMessage: "Number of participants not entered!" }
	}

	if (nrOfParticipants < 0) {
		return { correct: false, errorMessage: "Number of participants can't be below zero!" }
	}
	if (nrOfParticipants == 0) {
		return { correct: false, errorMessage: "Number of participants can't be zero!" }
	}
	return { correct: true }
}

function purposeValidation(purpose) {
	if (!purpose.trim()) {
		return { correct: false, errorMessage: "No purpose entered!" }
	}
	return { correct: true }
}

function checkBoxValidation() {
	if (!checkBox.checked) {
		return { correct: false, errorMessage: "You must accept our terms and conditions!" }
	}
	return { correct: true }
}


bookingForm.addEventListener("submit", function (event) {
	event.preventDefault();
	const checkListItems = [];
	const formData = new FormData(bookingForm);
	const nameInput = formData.get("name").trim();
	const emailInput = formData.get("email").trim();
	const roomInput = formData.get("room-select").trim();
	const date = formData.get("date").trim();
	const start = formData.get("start").trim();
	const end = formData.get("end").trim();
	const purpose = formData.get("purpose").trim();
	const nrOfParticipants = parseInt(formData.get("participants").trim(), 10);

	checkListItems.push(nameInputValidation(nameInput));
	checkListItems.push(emailInputValidation(emailInput));
	checkListItems.push(roomInputValidation(roomInput));
	checkListItems.push(dateValidation(date));
	checkListItems.push(startValidation(start));
	checkListItems.push(endValidation(end));
	checkListItems.push(purposeValidation(purpose));
	checkListItems.push(nrOfParticipantsValidation(nrOfParticipants));
	checkListItems.push(checkBoxValidation(checkBox));

	const errors = checkListItems.filter(item => !item.correct);

	if (errors.length) {
		errorMessageArea.innerHTML = errors.map(item => item.errorMessage).join("<br>");
		return
	}
	errorMessageArea.innerHTML = ""
	console.log({
		roomId: roomInput,
		date: date,
		startTime: start,
		endTime: end,
		bookedBy: {
			name: nameInput,
			email: emailInput,
		}
	})
});
