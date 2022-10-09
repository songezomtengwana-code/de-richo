import { React } from "react-dom";
import Navbar from "./components/navbar";

import { Home } from './pages/home';
// pages
function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}
export default App;
