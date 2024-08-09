import "./App.css";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import Delivery from "./pages/Delivery";
import FoodDelivery from "./pages/FoodDelivery";
import DeliveryComponent from "./components/DeliveryPartner.jsx/DeliveryComponent";
import MenuComponent from "./components/Menu/MenuComponent";
function App() {
  return (
    <div className="w-[100%] h-[100%]">
      <Header />
      <main>
        <Outlet />
        <Delivery />
        <FoodDelivery />
      </main>
      <DeliveryComponent/>
      <MenuComponent/>
      <Footer />
    </div>
  );
}

export default App;
