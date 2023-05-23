import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacto from "./pages/Menu";
import Home from "./pages/Home";
import Locales from "./pages/Locales";
import Menu from "./pages/Menu";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/locales" element={<Locales/>} />
          <Route path="/menu" element={<Menu/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
