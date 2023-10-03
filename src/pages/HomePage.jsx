import { Fragment } from "react";
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <Fragment>
            <Link to={`/beers`}> <button type='button'>All Beers Page</button></Link>
            <Link to={`/random-beer`}> <button type='button'>Random Beers</button></Link>
            <Link to={`/new-beer`}> <button type='button'>New Beers</button></Link>
        </Fragment>

    );
}




export default HomePage;



// /beers - to the "All Beers" page
// /random-beer - to the "Random Beer" page
// /new-beer - to the "New Beer" page
