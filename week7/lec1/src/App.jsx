import React, { useState, Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
const Dashboard = React.lazy(() => import("./components/Dashboard"));
import Landing from "./components/Landing";

function App() {
	const [count, setCount] = useState(0);

	// suspense Api

	return (
		<>
			<BrowserRouter>
				<AppBar />
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/' element={<Landing />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</>
	);

	function AppBar() {
		const navigate = useNavigate();
		return (
			<div style={{ background: "black", color: "white" }}>
				top bar here
				<div>
					<button
						onClick={() => {
							window.location.href = "/";
						}}
					>
						{" "}
						landing pages
					</button>

					<button
						onClick={() => {
							navigate("/dashboard");
						}}
					>
						Dashboard
					</button>
				</div>
			</div>
		);
	}
}

export default App;
