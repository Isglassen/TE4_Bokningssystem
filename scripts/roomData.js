const ROOM_DATA = {

	0: {
		id: 0,
		name: "The Big Room",
		description: "The big room next to the GOAT Billy",
		img: "big-room.jpg",
		imgAlt: "An image of the room",
		capacity: 7,
		equipment: ["One big sized square table", "Eight chairs"],
	},

	1: {
		id: 1,
		name: "The Library",
		description: "The library DUH",
		img: "library.jpg",
		imgAlt: "An image of the room",
		capacity: 5,
		equipment: ["One medium sized oval table", "Five chairs", "A TON of books"]
	},

	2: {
		id: 2,
		name: "The Triangle Room",
		description: "The triangle room next to the canteen",
		img: "triangle-room.jpg",
		imgAlt: "An image of the room",
		capacity: 5,
		equipment: ["One medium sized oval table", "One rectangular table", "Five chairs"]
	},
}

export function getRooms() {
	return ROOM_DATA;
}
