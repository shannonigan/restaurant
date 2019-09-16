import React from 'react';
import Menu from './Menu';


const Menus = ({ menus, deleteMenu, updateMenu }) => (
  <div >
    { menus.map( menu => (
      <Menu
        key={menu.id}
        { ...menu}
        deleteMenu={deleteMenu}
        updateMenu={updateMenu}
      />
    ))}
  </div>
);

export default Menus;