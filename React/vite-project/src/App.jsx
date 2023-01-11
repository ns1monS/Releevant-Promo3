import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./views/Register/Register";
import About from "./views/About/About";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import Login from "./views/Login/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
