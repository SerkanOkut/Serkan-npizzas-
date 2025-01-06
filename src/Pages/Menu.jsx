import React from "react";
import "./Menu.css";

const Menu = () => {
  const menuItems = [
    { id: 1, name: "YENİ Kore", imgSrc: "Serkan-npizzas-/images/iteration-2-images/icons/1.svg" },
    { id: 2, name: "Pizza", imgSrc: "Serkan-npizzas-/images/iteration-2-images/icons/2.svg" },
    { id: 3, name: "Burger", imgSrc: "Serkan-npizzas-/images/iteration-2-images/icons/3.svg" },
    { id: 4, name: "Kızartmalar", imgSrc: "Serkan-npizzas-/images/iteration-2-images/icons/4.svg" },
    { id: 5, name: "Fast Food", imgSrc: "Serkan-npizzas-/images/iteration-2-images/icons/5.svg" },
    { id: 6, name: "Gazlı İçecek", imgSrc: "Serkan-npizzas-/images/iteration-2-images/icons/6.svg" },
  ];

  return (
    <div className="menu">
      {menuItems.map((item) => (
        <a href="#" className="menu-item" key={item.id}>
          <img src={item.imgSrc} alt={item.name} />
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default Menu;
