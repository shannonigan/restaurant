import React from 'react';
import axios from 'axios';
import Menus from "./components/Menus";
import MenuForm from "./components/MenuForm";
import { Container, Header, } from "semantic-ui-react";


class App extends React.Component {
  state = { menus: [], };


  componentDidMount() {
    axios.get("/api/menus")
      .then( res => {
        this.setState({ menus: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  };

  addMenu = (name) => {
    axios.post("/api/menus", { name, })
      .then( res => {
        this.setState({ menus: [res.data, ...this.state.menus], })
      })
      .catch( err => {
        console.log(err);
      })
  };

  updateMenu = (id) => {
    axios.put(`/api/menus/${id}`)
      .then( res => {
        const menus = this.state.menus.map( menu => {
          if (menu.id === id)
            return res.data;
          return menu;
        });
        this.setState({ menus, });
      })
      .catch( err => {
        console.log(err);
      })
  };

  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
    
      .then( res => {
        
        this.setState({ menus: this.state.menus.filter( m => m.id != id) });
      })
      .catch( err => {
        
        console.log(err);
      })
  };
  
  render() {
    return(
      <div>
        <Container style={{ marginTop: "25px", }}>
          <Header as="h1" style={{textAlign:"center"}}> Jones Cafe </Header>
          <br/>
          <MenuForm addMenu={this.addMenu} />
          <br/>
          <br/>
          <Menus
            menus={this.state.menus}
            deleteMenu={this.deleteMenu}
            updateMenu={this.updateMenu}
          />
          
        </Container>
      </div>
    );
  };
};

export default App;
