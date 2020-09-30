import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

//Main App Class
class App extends Component {
  render() {
    return (<div className="App">
      <Navbar dark color="primary">     //Navbar Component
        <div className="container">
          <NavbarBrand href="/"> Ristorante Con Fusion </NavbarBrand> </div></Navbar> </div>
    );
  }
}
//Exporting App
export default App;
