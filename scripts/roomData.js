const ROOM_DATA = {
	201: {
		id: 201,
		name: "Room 201",
		desciption: "Room 201 is a cool room",
		img: "room201.jpg",
		capacity: 5,
		equipment: ["A thing", "A second thing"],
	},
	204: {
		id: 204,
		name: "Room 204",
		desciption: "Room 204 is a fun room",
		img: "room204.jpg",
		capacity: 7,
		equipment: ["A fun thing", "A less fun thing"],
	},
	305: {
		id: 305,
		name: "Room 305",
		desciption: "Room 305 is a boring room",
		img: "room305.jpg",
		capacity: 3,
		equipment: [],
	},
}

export function getRooms() {
	return ROOM_DATA;
}
