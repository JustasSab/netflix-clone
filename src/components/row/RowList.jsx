import Row from "./Row";
import requests from "../../requests";
const RowList = () => {
    return (
        <div className="rowList">
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Comedies" fetchUrl={requests.fetchComedyMovies}/>
        </div>
    );
}
 
export default RowList;