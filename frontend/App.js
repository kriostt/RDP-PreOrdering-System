// import necessary modules
import Navigation from "./navigation";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  // main component of the application
  return (
    // wrap the Navigation component with the Redux Provider and pass the Redux store
    <Provider store={store}>
      {/* render the Navigation component */}
      <Navigation />
    </Provider>
  );
}
