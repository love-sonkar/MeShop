import Banner from "./Components/banner/Banner";
import Header from "./Components/header/Header";
import Product from "./Components/product/Product";
import { useState, createContext } from "react";
import UserName from "./Components/user/UserName";

export const UserUpdate = createContext();
function App() {
  const [userinput, setuserinput] = useState(null);
  return (
    <>
      <div className="app">
        {userinput ? (
          <UserUpdate.Provider value={userinput}>
            <Header />
            <div className="mx-12">
              <Product />
            </div>
          </UserUpdate.Provider>
        ) : (
          <UserName setuser={setuserinput} />
        )}
      </div>
    </>
  );
}

export default App;
