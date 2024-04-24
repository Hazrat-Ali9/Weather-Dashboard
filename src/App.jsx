import "./App.css";
import Page from "./Components/Page/Page";
import {
  FavoriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./Provider";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <Page />
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
