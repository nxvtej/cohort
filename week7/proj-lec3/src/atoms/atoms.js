import { atom, selector } from "recoil";
import axios from "axios";

/*
//async data fetch
export const notificationAtom = atom({
	key: "notificationAtom",
	default: selector({
		key: "notificationSelector",
		get: async () => {
			const res = await axios.get("http://localhost:8080/notifications");
			return res.data;
		},
	}),
});

*/

export const notificationAtom = atom({
	key: "notificationAtom",
	/*
	default: {
		networks: 0,
		jobs: 0,
		messaging: 0,
		notifications: 0,
	},
	*/

	default: selector({
		key: "notificationSelector",
		get: async () => {
			await new Promise((r) => setTimeout(r, 5000));
			const res = await axios.get("http://localhost:8080/notifications");
			return res.data;
		},
	}),
});

export const meSelector = selector({
	key: "meSelector",
	get: ({ get }) => {
		const allNotificationAtom = get(notificationAtom);

		const network = allNotificationAtom.network;
		const jobs = allNotificationAtom.jobs;
		const message = allNotificationAtom.message;
		const notification = allNotificationAtom.notification;

		const totalCount = network + jobs + message + notification;
		return totalCount;
	},
});
