import {useParams} from "react-router-dom";

function DogDetails({ dogs }){
    const params = useParams();
    return <p>I'm in {params.name}'s details page.</p>

    const dog = dogs.filter(d => d.name === params.name)[0]

    return (

    )

};

export default DogDetails;