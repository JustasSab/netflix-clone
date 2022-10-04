import Row from "./Row";
import requests from "../../requests";
const RowList = () => {
    return (
        <div className="rowList">
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Comedies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romance" fetchUrl={requests.fetchARomanceMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchADocumentaries}/>
        </div>
    );
}
 
export default RowList;