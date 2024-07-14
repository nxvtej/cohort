import Image from "next/image";
import axios from "axios";
import { get } from "http";

async function getUserDetails() {
	const response = await axios.get(
		"https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
	);
	return response.data;
}

// async component
export default async function Home() {
	const userData = await getUserDetails();
	return (
		<div className='h-screen flex flex-col items-center justify-center'>
			<div className=''>
				<div>hi there</div>
				<div>
					{userData.email}
					{userData.name}
				</div>
			</div>
		</div>
	);
}
