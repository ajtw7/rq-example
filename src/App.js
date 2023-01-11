import { Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { Home } from "./components/views/Home";
import { SuperHeroes } from "./components/views/SuperHeroes";
import { RQSuperHeroes } from "./components/views/RQSuperHeroes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
          <Route path="/superheroes" element={<SuperHeroes />} />
          <Route path="/rq-superheroes" element={<RQSuperHeroes />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
