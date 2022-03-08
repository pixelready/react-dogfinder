import {useParams} from "react-router-dom";

/**Returns information about a specific Dog
 * 
 * Props: dogs [{name: "", age: #, src: "", facts: []}]
 * 
 * State: None
 * 
 * App --> DogDetails
 */

function DogDetails({ dogs }){
    const params = useParams();
    console.log("DOGS: ", dogs, "name param:", params.name);

    const dog = dogs.filter(d => d.src === params.name)[0];
    console.log("DOG:", dog);
    return (
        <div>
            <h1>{dog.name}</h1>
            <img height="250px" width="250px" alt={`${dog.name}`} src={`../${dog.src}.jpg`} />
            <h2>Facts</h2>
            <ul>
                {dog.facts.map((f,idx) => <li key={idx}>{f}</li>)}
            </ul>
        </div>
    )

};

export default DogDetails;