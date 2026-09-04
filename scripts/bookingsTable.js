import { getBookings } from "./bookingData.js";
import { getRooms } from "./roomData.js";

const rooms = getRooms();

const state = {
	bookings: getBookings(),
}

const rows = {}
const tbody = document.getElementById("bookingsBody");

function createRow(booking) {
	if (rows[booking.id]) return rows[booking.id]; // Don't create row that already exists

	const tr = document.createElement("tr")
	tr.dataset.id = booking.id;
	const roomTd = tr.appendChild(document.createElement("td"));
	const dateTd = tr.appendChild(document.createElement("td"));
	const timeTd = tr.appendChild(document.createElement("td"));
	const bookerTd = tr.appendChild(document.createElement("td"));
	const actionTd = tr.appendChild(document.createElement("td"));
	const deleteButton = actionTd.appendChild(document.createElement("button"))

	roomTd.textContent = rooms[booking.roomId].name;
	dateTd.textContent = booking.date;
	timeTd.textContent = `${booking.startTime} – ${booking.endTime}`;
	bookerTd.textContent = booking.bookedBy.name;
	deleteButton.textContent = "Delete";
	deleteButton.type = "button";
	deleteButton.classList.add("delete");
	deleteButton.dataset.id = booking.id;

	rows[booking.id] = tr;
	return tr;
}

function removeBooking(id) {
	rows[id].remove();
	delete rows[id];
}

function render() {
	state.bookings.forEach(v => {
		tbody.appendChild(createRow(v))
	});
}

tbody.addEventListener("click", (v) => {
	if (!v.target.classList.contains("delete") || !v.target.dataset.id) return;
	const id = parseInt(v.target.dataset.id, 10);
	if (isNaN(id) || id < 0) return;

	removeBooking(id);
});

render();
