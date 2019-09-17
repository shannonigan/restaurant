import React from 'react';
import Menu from './Menu';


const Menus = ({ menus, deleteMenu, updateMenu, toggleClick }) => (
  <div style={{ display: "flex", justifyContent: "space-around", }} >
    { menus.map( menu => (
      <Menu
        key={menu.id}
        { ...menu}
        deleteMenu={deleteMenu}
        updateMenu={updateMenu}
        toggleClick={toggleClick}
      />
    ))}
  </div>
);

export default Menus;