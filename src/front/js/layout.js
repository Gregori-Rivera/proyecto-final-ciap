import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Single } from "./pages/single";
import { Nosotros } from "./pages/nosotros";
import { Agregar } from "./pages/agregar";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Login />} path="/" />
            <Route element={<Home />} path="/home" />
            <Route element={<Single />} path="/single" />
            <Route element={<Nosotros />} path="/nosotros" />
            <Route element={<Agregar />} path="/agregar" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
