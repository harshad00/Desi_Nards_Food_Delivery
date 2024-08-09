import "./App.css";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import Delivery from "./pages/Delivery";
import FoodDelivery from "./pages/FoodDelivery";
function App() {
  return (
    <div className="w-[100%] h-[100%]">
      <Header />
      <main>
        <Outlet />
        <Delivery />
        <FoodDelivery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
