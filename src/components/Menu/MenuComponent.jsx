import { useState } from "react";
import { MenuName } from "./MenuName";
import Carousel from "./Carousel";


const MenuComponent = () => {
    const [menuItem,setMenuItem]=useState("Pizza");

  return (
    <div className="bg-white lg:px-16 text-center">
      <h2 className="text-xl font-bold mb-4">Our Menu</h2>
      <h3 className="text-3xl mb-8  font-bold">Menu That Always Makes You Fall In Love</h3>
      <div className="flex flex-col lg:flex-row">
        {/* menuName */}
        <MenuName menuItem={menuItem} setMenuItem={setMenuItem}/>
        <Carousel/>
        </div>
      </div>
    
  );
};

export default MenuComponent;
