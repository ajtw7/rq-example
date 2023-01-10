import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./components/views/Home";
import { SuperHeroes } from "./components/views/SuperHeroes";
import { RQSuperHeroes } from "./components/views/RQSuperHeroes";

function App() {
  return (

      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/superheroes">Traditiona Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-superheroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/superheroes" element={<SuperHeroes />}/>
          <Route path="/rq-superheroes" element={<RQSuperHeroes />}/>
          <Route path="/" element={<Home />}/>
          
        </Routes>
      </div>

  );
}

export default App;
