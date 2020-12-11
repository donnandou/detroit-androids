import './App.css';
import React from "react";
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer            
      propGreeting="Bienvenido a Detroit: Android Store"
      />
    </>
  );
}

export default App;