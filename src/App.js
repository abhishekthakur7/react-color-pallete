import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./components/palette/palette.component";
import PaletteList from "./components/palettelist/palettelist.component";
import SingleColorPalette from "./components/singlecolorpalette/singlecolorpalette.component";
import seedColors from "./seedColors";
import { generatePalette } from "./colorhelpers";

function App() {
  const findPalette = id => {
    return seedColors.find(palette => {
      return palette.id === id;
    });
  };

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={routeprops => (
          <PaletteList palettes={seedColors} {...routeprops} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={routeProps => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route
        path="/palette/:paletteId/:colorId"
        render={routeProps => (
          <SingleColorPalette
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
      />
    </Switch>
    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])}/>
    // </div>
  );
}

export default App;
