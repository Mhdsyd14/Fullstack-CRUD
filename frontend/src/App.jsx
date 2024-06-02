import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Detail from "./pages/Detail/Detail";
import Edit from "./pages/Edit/Edit";
import Home from "./pages/Home/Home";
import Tambah from "./pages/Tambah/Tambah";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/tambah" element={<Tambah />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
