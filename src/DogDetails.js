import {useParams} from "react-router-dom";

function DogDetails(){
    const params = useParams();
    return <p>I'm in {params.name}'s details page.</p>
};

export default DogDetails;