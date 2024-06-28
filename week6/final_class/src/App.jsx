import { useEffect, useMemo, useState, memo, useCallback } from "react";

function App() {
	const [exchange1Data, setExchange1Data] = useState({});
	const [exchange2Data, setExchange2Data] = useState({});
	const [bankData, setBankData] = useState({});

	console.log("App component rendered");

	useEffect(() => {
		console.log("Setting exchange1Data");
		setExchange1Data({
			returns: 100,
		});
	}, []);

	useEffect(() => {
		console.log("Setting exchange2Data");
		setExchange2Data({
			returns: 100,
		});
	}, []);

	useEffect(() => {
		console.log("Setting bankData after 5 seconds");
		setTimeout(() => {
			setBankData({
				income: 100,
			});
			console.log("bankData set to:", { income: 100 });
		}, 5000);
	}, []);

	// const exchangeReturns = exchange1Data.returns + exchange2Data.returns; //this runs again when components rerenders even though returns are unchanged

	// can see this runnign using react developer tools by certing breakpoints
	// const exchangeReturns = exchange1Data.returns + exchange2Data.returns; //this runs again when components rerenders even though returns are unchanged

	// const exchangeReturns = useMemo(() => {
	// 	return exchange1Data.returns + exchange2Data.returns;
	// }, [exchange1Data, exchange2Data]);
	// const incomeTax = (exchangeReturns + bankData.income) * 0.3;

	const exchangeReturns = useCallback(() => {
		console.log("Calculating exchangeReturns");
		return exchange1Data.returns + exchange2Data.returns;
	}, [exchange1Data, exchange2Data]);

	// Original commented code
	// const incomeTax = (exchangeReturns() + bankData.income) * 0.3;
	// console.log(incomeTax);

	const ExchangeReturnsCalculatorComponent = memo(function ({ cryptoReturns }) {
		console.log("ExchangeReturnsCalculatorComponent rendered");
		return (
			<div>
				<h1>Exchange Returns: {cryptoReturns()}</h1>
			</div>
		);
	});

	return (
		<div>
			<ExchangeReturnsCalculatorComponent cryptoReturns={exchangeReturns} />
		</div>
	);

	// Original commented code
	// remember functions were not same even though their bodies were same so have to use callbacks here let's see next
}

export default App;
