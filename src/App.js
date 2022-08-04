import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Row from "./components/row/Row"
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies}/>
    </div>
  );
}

export default App;
