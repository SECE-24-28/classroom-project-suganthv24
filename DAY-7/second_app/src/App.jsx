import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState([
		{ id: 1, name: "Suganth", fee: false },
		{ id: 2, name: "Sathish", fee: true },
		{ id: 3, name: "Surya", fee: false }
	]);

	const handleDelete = (id) => {
		setCount(count.filter((ls) => ls.id !== id))
	}

	const handleCheck = (id) => {
		setCount(count.map((ls) => ls.id === id ? { ...ls, fee: !ls.fee } : ls))
	}

	return (
		<div className="app-container">
			<div className="card">
				<h1 className="title">Student List</h1>
				<ul className="student-list"> {count.map((ls) => (
						<li key={ls.id} className="student-item">
							<div className="student-info">
								<input type="checkbox" checked={ls.fee} onChange={() => handleCheck(ls.id)} />
								<label>{ls.name}</label>
							</div>
							<button className="delete-btn" onClick={() => handleDelete(ls.id)}>Delete</button>
						</li>
					))}
				</ul>
				<p className='fee-paid'>Fee Paid: {count.filter((ls) => ls.fee).length}</p>
				<p className='fee-not-paid'>Fee Not Paid: {count.filter((ls) => !ls.fee).length}</p>
			</div>
		</div>
	)
}

export default App
