import Header from "./components/Header/Header";
import "./App.scss";
import ProductsCard from "./components/ProductCard/ProductsCard";
import { useState } from "react";

function App() {
  const [selectedCategori, SetSelectedCategori] = useState("all");


  return (
    <div className="App">
      <Header clickChange={SetSelectedCategori} />
      <ProductsCard a={selectedCategori} />
    </div>
  );
}

export default App;
