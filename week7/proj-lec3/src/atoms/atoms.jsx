import { atom, selector } from "recoil";

export const networkAtom = atom({
	key: "networkAtom",
	default: 104,
});

export const jobsAtom = atom({
	key: "jobsAtom",
	default: 0,
});

export const messageAtom = atom({
	key: "messageAtom",
	default: 0,
});

export const notificationAtom = atom({
	key: "notificationAtom",
	default: 15,
});

export const meSelector = selector({
	key: "meSelector",
	get: ({ get }) => {
		const network = get(networkAtom);
		const jobs = get(jobsAtom);
		const message = get(messageAtom);
		const notification = get(notificationAtom);
		const totalCount = network + jobs + message + notification;
		return totalCount;
	},
});
