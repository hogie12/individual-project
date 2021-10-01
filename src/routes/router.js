import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../component/footer";
import Header from "../component/header/header";
import DetailPage from "../pages/detail/detail";
import Homepage from "../pages/homepage";
import FavoritePage from "../pages/favorite";

export default function Routers() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <Homepage />
        </Route>
        <Route path="/game/:id">
          <DetailPage />
        </Route>
        <Route path="/favorites">
          <FavoritePage />
        </Route>
        <Route path="*">not found</Route>
      </Switch>
      <Footer />
    </>
  );
}
