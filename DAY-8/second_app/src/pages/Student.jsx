import { useContext } from "react";
import "../css/Student.css";
import { DataContext } from "../../Context/DataContext.jsx";

function Student() {
	const { count, searchQuery, name, setName, setSearchQuery, handleAdd, handleDelete, handleCheck, filteredStudents } = useContext(DataContext);
	return (
		<div className="app-container">
			<div className="card">
				<h1 className="title">Student List</h1>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter student name" className="search-input" />
				<button className="add-btn" onClick={handleAdd}>Add Student</button>
				<input type="text" className="search-input" placeholder="🔍 Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
				<ul className="student-list">{filteredStudents.map((ls) => (
					<li key={ls.id} className="student-item">
						<div className="student-info">
							<input type="checkbox" checked={ls.fee} onChange={() => handleCheck(ls.id)} />
							<label>{ls.name}</label>
						</div>
						<button className="delete-btn" onClick={() => handleDelete(ls.id)}>Delete</button>
					</li>
				))}
				</ul>
				<div className="footer">
				<p className="fee-paid">Fee Paid: {count.filter((ls) => ls.fee).length}</p>
				<p className="fee-not-paid">Fee Not Paid: {count.filter((ls) => !ls.fee).length}</p>
				</div>
			</div>
		</div>
	);
}
export default Student;