import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./css/index.css";

import { DataProvider } from "../Context/DataContext";
import { CounterProvider } from "../Context/CounterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>
        <CounterProvider>
          <App />
        </CounterProvider>
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
);
