import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CommitList from "./pages/CommitList/CommitList";
import CommitDetails from "./pages/CommitDetails/CommitDetails";

function App() {
  const [count, setCount] = useState(0);
  const token = import.meta.env.VITE_APP_GITHUB_TOKEN;

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<CommitList />} />
          <Route path="/details/:id" element={<CommitDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
