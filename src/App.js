import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Cart from "./Pages/Cart";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="cart" element={<Cart />} />
        {/* <Route path="*" element={<Navigate to="cart" />} /> */}
      </Routes>
    </div>
  );
}

export default App;
