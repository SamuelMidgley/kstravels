import React, { useLayoutEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Header,
  Home,
  WeekOne,
  WeekTwo,
  WeekThree,
  WeekFour,
  WeekFive,
  ScrollToTop,
  WeekSix,
  WeekSeven,
} from "./components";
import { WeekEight } from "./components/week/WeekEight";

const Admin = React.lazy(() => import("./components/admin/Admin"));

function App() {
  useLayoutEffect(() => {
    const theme = window.localStorage.getItem("theme");
    if (theme) {
      const htmlElement = document.querySelector("html");
      if (htmlElement) {
        htmlElement.className = theme;
      }
      return;
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      const htmlElement = document.querySelector("html");
      if (htmlElement) {
        htmlElement.className = "dark";
      }
      window.localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <React.Suspense fallback={<></>}>
              <Admin />
            </React.Suspense>
          }
        />
        <Route path="/week/1" element={<WeekOne />} />
        <Route path="/week/2" element={<WeekTwo />} />
        <Route path="/week/3" element={<WeekThree />} />
        <Route path="/week/4" element={<WeekFour />} />
        <Route path="/week/5" element={<WeekFive />} />
        <Route path="/week/6" element={<WeekSix />} />
        <Route path="/week/7" element={<WeekSeven />} />
        <Route path="/week/8" element={<WeekEight />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
