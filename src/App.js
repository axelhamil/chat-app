import React from 'react';
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
          isConnected={false}
      />
    </div>
  );
}

export default App;
