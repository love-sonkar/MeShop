import Banner from "./Components/banner/Banner";
import Header from "./Components/header/Header";
import Product from "./Components/product/Product";
import { useState, createContext } from "react";

const SearchParam = createContext();
function App() {
  const [search, setsearch] = useState("love");
  return (
    <div className="app">
      <Header />
      <div className="mx-12">
        {/* <Banner /> */}
        <Product />
      </div>
    </div>
  );
}

export default App;
