import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavBar from "./components/navbar/navbar.component";
import Footer from "./routes/footer/footer.component";
import React, { useEffect, Fragment } from "react";
import "./App.css";

import useLocalStorage from "use-local-storage";
import {
  LabelColorMode,
  InputColorMode,
  SpanColorMode,
} from "./components/color-mode/color-mode.styles";

import { NavBarContainer } from "./components/navbar/navbar.styles";
import { FooterContainer } from "./routes/footer/footer.styles";

import AOS from "aos";
import "aos/dist/aos.css";
import About from "./routes/about/about.component";
import NotFound from "./routes/notFound/not-found.component";

import Freelance from "./routes/freelance/freelance.component";
import Travelling from "./routes/travelling/travelling.component";
import Dev from "./routes/dev/dev.component";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // click in the there input:
  // display none for one image and display flex for the other

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-theme={theme}>
      <NavBarContainer>
        <NavBar />
        <LabelColorMode>
          <InputColorMode
            type="checkbox"
            onClick={switchTheme}
          ></InputColorMode>
          <SpanColorMode></SpanColorMode>
        </LabelColorMode>
      </NavBarContainer>
      <Routes>
        <Route path="/about" element={<About />} />

        <Route path="/websites" element={<Freelance />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/viajamylena" element={<Travelling />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={
            <Fragment>
              {/*<LabelColorMode>
                <InputColorMode
                  type="checkbox"
                  onClick={switchTheme}
                ></InputColorMode>
                <SpanColorMode></SpanColorMode>
          </LabelColorMode>*/}

              {/*<NavBar theme={theme} toggleTheme={themeToggler} />*/}
              {/*<NavBar />*/}

              <Home />
              <FooterContainer>
                <Footer />
              </FooterContainer>
            </Fragment>
          }
        >
          {/*<Route index element={<Home />} />*/}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
