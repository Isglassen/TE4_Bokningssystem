const BOOKING_DATA = [
	{
		roomId: 0,
		id: 0,
		date: "2026-08-25",
		startTime: "13:15",
		endTime: "14:00",
		bookedBy: {
			name: "Sven Sven",
			email: "sven.sven@example.com",
		}
	},
	{
		roomId: 1,
		id: 1,
		date: "2026-08-25",
		startTime: "14:30",
		endTime: "16:00",
		bookedBy: {
			name: "Sven Svensson",
			email: "sven.svensson@example.com",
		}
	},
	{
		roomId: 1,
		id: 2,
		date: "2026-08-25",
		startTime: "13:30",
		endTime: "14:30",
		bookedBy: {
			name: "Sven Svenssonson",
			email: "sven.svenssonson@example.com",
		}
	},
	{
		roomId: 2,
		id: 3,
		date: "2026-08-25",
		startTime: "12:00",
		endTime: "13:00",
		bookedBy: {
			name: "Sven Svenssonsonson",
			email: "sven.svenssonsonson@example.com",
		}
	},
	{
		roomId: 2,
		id: 4,
		date: "2026-08-25",
		startTime: "14:30",
		endTime: "15:00",
		bookedBy: {
			name: "Sven Svenssonsonsonson",
			email: "sven.svenssonsonsonson@example.com",
		}
	},
]

export function getBookings() {
	return BOOKING_DATA
}
