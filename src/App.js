import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name="Clara Hopkins"
        online={true}
        avatar="https://randomuser.me/api/portraits/women/23.jpg"
      />
      <Contact
        name="Jeremy Harris"
        online={false}
        avatar="https://randomuser.me/api/portraits/men/54.jpg"
      />
      <Contact
        name="Larry Hale"
        online={true}
        avatar="https://randomuser.me/api/portraits/men/30.jpg"
      />
    </div>
  );
}

export default App;
