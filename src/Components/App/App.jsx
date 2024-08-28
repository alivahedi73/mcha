import React, { useEffect, useState } from "react";
import Left from "../Left/Left";
import "./App.scss";
let MyContext = React.createContext();
const App = () => {
  let [menu, setMenu] = useState([]);
  let fetchMenu = async () => {
    try {
      let data = await fetch("http://localhost:3000/Menu");
      let res = data.json();
      setMenu(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <>
      {/* start of project */}
      <div className="main_cat">
        <MyContext.Provider value={{ menu }}>
          <div className="w_cat">
            {/* start of right categorize */}
            <Left />
            {/* end of right categorize */}
          </div>
        </MyContext.Provider>
      </div>
      {/* end of project */}
    </>
  );
};

export default App;
