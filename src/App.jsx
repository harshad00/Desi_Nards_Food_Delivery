import "./App.css";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import DeliveryComponent from "./components/DeliveryPartner.jsx/DeliveryComponent";
import MenuComponent from "./components/Menu/MenuComponent";
function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <DeliveryComponent/>
      <MenuComponent/>
      <Footer />
    </div>
  );
}

export default App;
