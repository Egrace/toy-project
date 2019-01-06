import React from "react";
import ReactDOM from "react-dom";
import { App } from "./main/components/App";
import { Provider } from "react-redux";
import rootStore from "./main/store";

const wrapper = document.getElementById("app");

if (wrapper) {
 ReactDOM.render(
   <Provider store={rootStore}>
     <App />
   </Provider>,
   wrapper
 )
}
