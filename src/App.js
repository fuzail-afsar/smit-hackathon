import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Auth from "./auth/Auth";
import Theme from "./components/pattern/UI/atoms/theme/Theme";
import Routes from "./routes/Routes";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
      <Auth>
        <BrowserRouter>
          <Theme>
            <Routes />
          </Theme>
        </BrowserRouter>
      </Auth>
    </Provider>
  );
}

export default App;
