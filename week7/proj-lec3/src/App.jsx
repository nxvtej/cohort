import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { notificationAtom, meSelector } from "./atoms/atoms";

import { RecoilRoot } from "recoil";

import axios from "axios";

function App() {
	return (
		<>
			<RecoilRoot>
				<MyApp />;
			</RecoilRoot>
		</>
	);
}

function MyApp() {
	const [notificationCount, setNotificationCount] = useRecoilState(
		notificationAtom
	);
	const totalCount = useRecoilValue(meSelector);

	useEffect(() => {
		axios.get("http://localhost:8080/notifications").then((res) => {
			setNotificationCount(res.data);
		});
	}, []);

	return (
		<>
			<button>Home</button>
			<button>
				My network{" "}
				{notificationCount.networks > 99 ? "99+" : notificationCount.networks}
			</button>
			<button>Jobs {notificationCount.jobs}</button>
			<button>Message {notificationCount.messaging}</button>
			<button>Notification {notificationCount.notifications}</button>

			<button>Me {totalCount}</button>
		</>
	);
}

export default App;
