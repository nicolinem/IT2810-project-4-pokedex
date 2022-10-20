import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import "./styles/globals.css";
import { ApolloProvider} from '@apollo/client';
import {client} from './cache'



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
