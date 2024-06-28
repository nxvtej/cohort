import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
	const [income, setIncome] = useState(50000);
	const divRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			console.log(divRef.current);
			divRef.current.innerHTML = 50;
		}, 600);
	});

	return (
		<div>
			hi there , your income tax returns are <div ref={divRef}>{income}</div>
		</div>
	);
};

export default UseRef;
