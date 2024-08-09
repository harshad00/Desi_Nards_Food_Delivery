import "./App.css";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-[100%] h-[100%]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
