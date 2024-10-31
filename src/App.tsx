import { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";

function App() {
	const [employee, setEmployee] = useState(sampleEmployee);

	const getEmployee = () => {
		// Send the request
		fetch("http://localhost:3310/api/employees")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);

				setEmployee(data.results[0]);
			});
	};

	return (
		<div className="App">
			<EmployeeCard employee={employee} />
			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
		</div>
	);
}

const sampleEmployee = {
	name: {
		first: "",
		last: "",
	},
	email: "",
	picture: {
		medium: "",
	},
};

export default App;
