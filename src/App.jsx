import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// import HomeBanner from "./Components/HomeBanner";
import { ThemeStore } from "./Components/ContextStores/ThemeContext.jsx";
import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { theme } = useContext(ThemeStore);

  let lightTheme = "bg-white pt-1";
  let darkTheme = "bg-gray-700 pt-1";
  return (
    <>
      <div className={theme == "light" ? lightTheme : darkTheme}>
        <Navbar />
        {/* <HomeBanner /> */}
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
