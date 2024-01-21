import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App";

//Do not remove/change the below two imports
import { initState } from "./pages/products/productsReducer";
import { productsReducer } from "./pages/products/productsReducer";
// import { reducer } from "./reducer/reducer";
import { AuthContextProvider } from "./context/AuthContextProvider";
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
  );

// DO NOT REMOVE THIS PEICE OF CODE
if (window.Cypress) {
  window.reducerInitialState = initState;
  window.reducer = productsReducer;
}