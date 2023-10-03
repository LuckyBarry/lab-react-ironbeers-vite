import { Fragment } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Fragment>
            <Link to={`/`}> <button type='button'>HomePage</button></Link>
        </Fragment>
    )
}

export default Navbar;
