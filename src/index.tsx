import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./app/App";
import "./styles/globals.css";
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';



const client = new ApolloClient({
  uri: "http://localhost:4001/graphql",
  cache: new InMemoryCache(),
});


console.log(client)

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
