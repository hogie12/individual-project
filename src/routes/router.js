import { Switch, Route } from "react-router-dom";
import Footer from "../component/footer";
import Header from "../component/header/header";
import DetailPage from "../pages/detail/detail";
import Homepage from "../pages/homepage";

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
        <Route path="*">not found</Route>
      </Switch>
      <Footer />
    </>
  );
}
