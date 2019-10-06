import React from 'react';
import Palette from './components/palette/palette.component';
import seedColors from './seedColors';
import { generatePalette } from './colorhelpers';

function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <div className="App">
      <Palette palette={seedColors[4]}/>
    </div>
  );
}

export default App;