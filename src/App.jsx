import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HoroscopeList from "./components/HoroscopeList";
import data from "./data";

const App = () => {
  return (
    <div className="App">
      <div class="container">
        <Header title="Horoscope App" />
        <HoroscopeList data={data}/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
