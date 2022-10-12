import { configureStore } from "@reduxjs/toolkit";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Store } from "redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import reducer from "./store/reducer";

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType;
} = configureStore({ reducer });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
