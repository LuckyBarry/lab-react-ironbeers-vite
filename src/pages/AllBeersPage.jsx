import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {


    const [beers, setBeers] = useState([])

    const fetchAllBeers = async () => {
        const response = await fetch("https://ih-beers-api2.herokuapp.com/beers")
        if (response.ok) {
            const allBeers = await response.json()
            setBeers(allBeers)
            console.log(allBeers)
        }
    }

    useEffect(() => {
        fetchAllBeers()
    }, [])
    return (
        <>
            {
                beers.map(item => (
                    <li key={item._id}>
                        <img src={item.image_url} style={{ height: "150px" }} />
                        <p>{item.name}</p>
                        <p>{item.tagline}</p>
                        <p>{item.contributed_by}</p>
                        <Link to={`/beers/${item._id}/update`}>About Page</Link>
                    </li>)

                )
            }
        </>
    )




}


export default AllBeersPage;


// image

// name

// tagline

// contributed_by