import { useLayoutEffect } from "react";
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
  WeekEight,
  WeekNine,
  WeekTen,
} from "./components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeekTwelve } from "./components/week/WeekTwelve";
import { WeekThirteen } from "./components/week/WeekThirteen";
import { WeekFourteen } from "./components/week/WeekFourteen";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/week/1" element={<WeekOne />} />
          <Route path="/week/2" element={<WeekTwo />} />
          <Route path="/week/3" element={<WeekThree />} />
          <Route path="/week/4" element={<WeekFour />} />
          <Route path="/week/5" element={<WeekFive />} />
          <Route path="/week/6" element={<WeekSix />} />
          <Route path="/week/7" element={<WeekSeven />} />
          <Route path="/week/8" element={<WeekEight />} />
          <Route path="/week/9" element={<WeekNine />} />
          <Route path="/week/10" element={<WeekTen />} />
          <Route path="/week/12" element={<WeekTwelve />} />
          <Route path="/week/13" element={<WeekThirteen />} />
          <Route path="/week/14" element={<WeekFourteen />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
