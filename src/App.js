import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import RowList from "./components/row/RowList";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <RowList/>
      <Footer />
    </div>
  );
}

export default App;
