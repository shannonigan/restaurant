import React from "react";
import { Header, Button, Icon, } from "semantic-ui-react";

const Menu = ({ id, name, deleteMenu, updateMenu, toggleClick }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Header as="h2" style={{ marginLeft: "15px" }}> {name} </Header>
    </div>
  <Button
    icon
    color="violet"
    size="tiny"
    onClick={() => toggleClick(id)}
    style={{ marginLeft:"15px", }}
    >
      <Icon name="caret square down"/>
  </Button>
  <Button
    icon
    color="teal"
    size="tiny"
    onClick={() => updateMenu(id)}
    >
      <Icon name="pencil alternate"/>
  </Button>
  <Button
    icon
    color="red"
    size="tiny"
    onClick={() => deleteMenu(id)}
    >
      <Icon name="trash"/>
  </Button>
  </div>
);

const styles = {
  flex: {
    display: "flex",
    alignItems: "center",

    
  },
  pointer: {
    cursor: "pointer",
  },
  
};

export default Menu;