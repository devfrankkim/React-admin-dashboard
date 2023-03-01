import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "contexts/ContextProvider";

import "./App.css";
import { Navbar, Sidebar, ThemeSettings } from "components";
import {
  Area,
  Bar,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Financial,
  Kanban,
  Line,
  Orders,
  Pie,
  Pyramid,
  Stacked,
} from "pages";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
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
        {/* ============= Settings - Tooltip =============*/}
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
        {/* ============= Sidebar =============*/}
        <div
          className={
            activeMenu
              ? "w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"
              : "w-0 dark:bg-secondary-dark-bg"
          }
        >
          <Sidebar />
        </div>
        {/* ============= NavBar  =============*/}
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
          <Navbar />
        </div>
        <div>
          {/* {themeSettings && <ThemeSettings />} */}

          <Routes>
            {/* ============= dashboard  =============*/}
            <Route path="/" element={<Ecommerce />} />
            <Route path="/ecommerce" element={<Ecommerce />} />

            {/* ============= pages =============  */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />

            {/* ============= apps =============  */}
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/color-picker" element={<ColorPicker />} />

            {/* ============= charts ============= */}
            <Route path="/line" element={<Line />} />
            <Route path="/area" element={<Area />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/color-mapping" element={<ColorMapping />} />
            <Route path="/pyramid" element={<Pyramid />} />
            <Route path="/stacked" element={<Stacked />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
