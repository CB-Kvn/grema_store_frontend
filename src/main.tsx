import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  //   <Provider store= {store}>
  //     <PersistGate loading = {null} persistor={persistor}>
  //         <App />
  //     </PersistGate>
  //   </Provider>
  // </React.StrictMode>

  <div style={{backgroundImage: 'url(https://grema-store-frontend.vercel.app/images/backs6.png', backgroundSize:"cover"}}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </div>
);
