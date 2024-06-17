import "./App.css";
import Header from "./Header";
import WeatherCondition from "./WeatherCondition";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="body-container">
        <Header />
        <WeatherCondition />
        <WeatherForecast />
        <Footer />
      </div>
    </div>
  );
}

export default App;
