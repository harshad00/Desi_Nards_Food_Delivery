/* eslint-disable react/prop-types */

import { useState } from "react";

export const MenuName = () => {
    const [selectedItem, setSelectedItem] = useState('Pizza');

    const menuItems = [
      { name: 'Burger', emoji: '🍔' },
      { name: 'Pizza', emoji: '🍕' },
      { name: 'Cupcake', emoji: '🧁' },
      { name: 'Ramen', emoji: '🍜' },
      { name: 'Ice Cream', emoji: '🍦' }
    ];
  
    return (
      <div className="p-8 bg-white w-full sm:w-1/2 md:w-1/4">
        <ul className="flex flex-row lg:flex-col space-y-4">
          {menuItems.map((item) => (
            <li key={item.name} className="flex items-center space-x-2">
              <button
                onClick={() => setSelectedItem(item.name)}
                className={`text-lg px-4 py-2 w-full rounded-full flex items-center space-x-2 ${
                  selectedItem === item.name ? 'bg-red-500 text-white' : 'bg-transparent'
                }`}
              >
                <span className={`${selectedItem === item.name ? 'bg-white text-red-500 rounded-full px-2' : ''}`}>{item.emoji}</span>
                <span className="text-nowrap">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}
