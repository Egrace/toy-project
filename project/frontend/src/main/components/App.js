import React from "react";
import DigitsRecognizer from "../../digits_recognizer/components/DigitsRecognizer"

export const App = () => (
  <div>
    <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
      <a className="navbar-brand" href="#">Egrace's Toy Project</a>
    </nav>
    <DigitsRecognizer />
  </div>
);
