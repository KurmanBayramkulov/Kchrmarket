import Sidebar from "./components/Sidebar";
import Statistics from "./pages/Statistics";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Orders from "./pages/Orders";
import Menu from "./pages/Menu";
import Delivery_radius from "./pages/Delivery_radius";
import History from "./pages/History";
import Settings from "./pages/Settings";


function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
        <Route path="/" element={<Statistics />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/delivery_radius" element={<Delivery_radius />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
