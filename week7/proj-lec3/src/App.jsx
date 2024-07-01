import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
	jobsAtom,
	messageAtom,
	networkAtom,
	notificationAtom,
	meSelector,
} from "./atoms/atoms";

function App() {
	const networkCount = useRecoilValue(networkAtom);
	const jobCount = useRecoilValue(jobsAtom);
	const [messageCount, setMessageCount] = useRecoilState(messageAtom);
	const notificationCount = useRecoilValue(notificationAtom);

	const totalCount = useRecoilValue(meSelector);

	return (
		<>
			<button>Home</button>
			<button>My network {networkCount > 99 ? "99+" : networkCount}</button>
			<button>Jobs {jobCount}</button>
			<button
				onClick={() => {
					setMessageCount(messageCount + 1);
				}}
			>
				Message {messageCount}
			</button>
			<button>Notification {notificationCount}</button>
			``
			<button>Me {totalCount}</button>
		</>
	);
}

export default App;
