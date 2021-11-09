import React, { FC } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ErrorBoundary } from "../components";
import { ProductsPage } from "../pages";

const App: FC = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <ProductsPage />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
