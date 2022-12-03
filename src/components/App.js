import React from "react";
import Header from "./Header";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";

function App() {
  return (
    <div className="app">
      <Header />
      <ItemList />
    </div>
  );
}

export default App;