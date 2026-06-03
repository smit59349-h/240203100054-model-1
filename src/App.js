import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Registration from "./Registration";
import Apicalling from "./Apicalling";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Apicalling />} />
        {/* <Route path="/" element={<Registration />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="*" element={<Navigate to="/signup" replace />} /> */}
      </Routes>
      <Registration />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
