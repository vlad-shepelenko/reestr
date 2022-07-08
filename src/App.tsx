import React from "react";
import Account from "./components/Account";
import Authorization from "./components/Authorization";
import Header from "./components/Header";
import Information from "./components/Information";
import Registries from "./components/Registries";
import News from "./components/News";
import Documents from "./components/Documents";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Information />
                  <Registries />
                  <News />
                  <Documents />
                  <Questions />
                  <Footer />
                </>
              }
            />
            <Route
              path="/auth"
              element={
                <>
                  <Header />
                  <Authorization />
                  <Footer />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <Header />
                  <Account />
                  <Footer />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
