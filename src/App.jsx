import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout/Layout';
import Home from './Pages/Home';

function App() {
  return (
    <HashRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Layout />} />
        </Route>
      </Routes>
    </HashRouter >
  );
}

export default App;
