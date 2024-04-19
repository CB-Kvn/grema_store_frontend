import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { HashRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  //   <Provider store= {store}>
  //     <PersistGate loading = {null} persistor={persistor}>
  //         <App />
  //     </PersistGate>
  //   </Provider>
  // </React.StrictMode>


    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  
);
