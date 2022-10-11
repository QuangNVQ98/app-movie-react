import { configureStore } from "@reduxjs/toolkit";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Store } from "redux";

import App from "./App";
import reducer from "./store/reducer";

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType;
} = configureStore({reducer});

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
