import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import MoreInfo from "./pages/MoreInfo";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/about" element={<About/>} />
          <Route path="/info" element={<MoreInfo/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
