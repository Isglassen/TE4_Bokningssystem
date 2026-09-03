import { getRooms } from "./roomData.js";

const roomsSection = document.getElementById("roomList");

const rooms = getRooms();

function createRoom(room) {
	const article = document.createElement("article");
	article.classList.add("room");

	const heading = article.appendChild(document.createElement("h3"));
	const description = article.appendChild(document.createElement("p"));
	const image = article.appendChild(document.createElement("img"));
	const capacity = article.appendChild(document.createElement("p"));
	const equipmentHeading = article.appendChild(document.createElement("h4"));
	const equipmentUl = article.appendChild(document.createElement("ul"));

	heading.textContent = room.name;
	description.textContent = room.description;
	image.src = `./images/${room.img}`;
	image.alt = room?.imgAlt ? room.imgAlt : "";
	capacity.textContent = `Capacity: ${room.capacity}`;
	equipmentHeading.textContent = "Equipment";
	room.equipment.forEach(v => {
		const li = equipmentUl.appendChild(document.createElement("li"))
		li.textContent = v;
	})
	if (!room.equipment.length) {
		equipmentUl.remove();
		article.appendChild(document.createElement("p")).textContent = "Nothing";
	}

	const bookingLink = article.appendChild(document.createElement("a"));
	bookingLink.textContent = "Book this room";
	bookingLink.href = "book.html";
	bookingLink.classList.add("button");

	return article;
}

function render() {
	[...roomsSection.querySelectorAll("article.room")].forEach(v => v.remove());

	Object.values(rooms).forEach(v => {
		roomsSection.appendChild(createRoom(v));
	})
}

render();
