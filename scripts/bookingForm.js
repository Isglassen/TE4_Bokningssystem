import { getRooms } from "./roomData.js";

const roomSelect = document.querySelector("#room-select");

Object.values(getRooms()).forEach(v => {
	const option = roomSelect.appendChild(document.createElement("option"));
	option.value = v.id;
	option.textContent = v.name;
})
