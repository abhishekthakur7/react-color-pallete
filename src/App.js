import React from 'react';
import Palette from './components/palette/palette.component';
import seedColors from './seedColors';

function App() {
  return (
    <div className="App">
      <Palette palette={seedColors[4]}/>
    </div>
  );
}

export default App;