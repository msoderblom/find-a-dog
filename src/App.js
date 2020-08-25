import React from "react";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import LayoutSimple from "./components/LayoutSimple";
import StartPage from "./pages/StartPage";
import BreedListPage from "./pages/BreedListPage";
import BreedImagesPage from "./pages/BreedImagesPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/breed/:breed/:subBreed"
          render={(props) => {
            return (
              <LayoutSimple>
                <BreedImagesPage {...props}></BreedImagesPage>
              </LayoutSimple>
            );
          }}
        ></Route>
        <Route
          path="/breed/:breed"
          render={(props) => {
            return (
              <LayoutSimple>
                <BreedImagesPage {...props}></BreedImagesPage>
              </LayoutSimple>
            );
          }}
        ></Route>
        <Route path="/breed-list">
          <LayoutSimple>
            <BreedListPage></BreedListPage>
          </LayoutSimple>
        </Route>
        <Route path="/">
          <LayoutSimple>
            <StartPage></StartPage>
          </LayoutSimple>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
