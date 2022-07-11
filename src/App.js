import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";

const App = () => {
  return (
    <div className="center App">
      <Navigation />
      <Logo />
      <ImageLinkForm />
    </div>
  );
};

export default App;
