import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "contexts/ContextProvider";

import "./App.css";
import { Navbar, Sidebar } from "components";

const App = () => {
  const {
    activeMenu,
    setCurrentColor,
    setCurrentMode,
    currentColor,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");

    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <TooltipComponent content="Settings" position="Top">
          <button
            type="button"
            onClick={() => setThemeSettings(true)}
            style={{ background: currentColor, borderRadius: "50%" }}
            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <FiSettings />
          </button>
        </TooltipComponent>
        <div
          className={
            activeMenu
              ? "w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"
              : "w-0 dark:bg-secondary-dark-bg"
          }
        >
          <Sidebar />
        </div>
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
          <Navbar />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
