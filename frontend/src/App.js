import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import NotesListPages from "./pages/NotesListPages";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<NotesListPages />} />
          <Route path="/notes/:noteId" element={<NotePage />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
