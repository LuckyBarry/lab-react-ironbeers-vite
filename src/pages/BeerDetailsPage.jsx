import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
    const { beerId } = useParams();

    const [beer, setBeer] = useState()

    const fetchBeer = async () => {
        const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        if (response.ok) {
            const beer = await response.json()
            setBeer(beer)
            console.log(beer)
        }
    }

    useEffect(() => {
        fetchBeer()
    }, [])

    return beer ? (
        <>
        <img src={beer.image_url} alt="" />
        <p>{beer.name}</p>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuatin_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
        </>
    ) : (
        <h1>Loading...</h1>
    )
}

export default BeerDetailsPage;
