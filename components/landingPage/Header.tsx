import React from "react";

const Header = () => {
  const navData = ["Home", "About", "Services", "Shop", "Contact"];
  return (
    <header className="flex max-w-7xl mx-auto justify-between items-center h-[10vh]">
      <div className="flex gap-0 leading-none flex-col">
        <h3 className="font-semibold text-2xl">Drashti</h3>
        <span>eye hospital</span>
      </div>
      <div className="flex gap-5 items-center">
        <ul className="flex gap-5">
          {navData.map((item, index) => (
            <li
              key={index}
              className="text-base font-medium"
            >
              {item}
            </li>
          ))}
        </ul>
        <button className="font-semibold px-5 py-2 bg-color-1 rounded-accent-1 text-base hover:bg-transparent hover:border hover:border-color-1">
          Make an Appointment
        </button>
      </div>
    </header>
  );
};

export default Header;
