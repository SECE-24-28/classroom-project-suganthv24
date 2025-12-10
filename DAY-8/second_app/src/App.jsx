import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Student from "./pages/Student";
import Counter from "./pages/Counter";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Welcome to SUGANTH's Website✌️</h1>} />
        <Route path="/students" element={<Student />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
