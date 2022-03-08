import { NavLink } from "react-router-dom";

/**Returns list of all dogs with pictures and name.
 * Each has link to DogDetails
 * 
 * Props: dogs [{name: "", age: #, src: "", facts: []}]
 * 
 * State: None
 * 
 * App --> DogList
 */

function DogList({ dogs }) {

    return (
        <div>
            <p>DOG LIST</p>
            <ul>
                {dogs.map(d =>
                    <li key={d.name}>
                        <NavLink key={d.name} exact to={`/dogs/${d.src}`} >
                            {d.name}
                            <img height='250px' width='250px' src={`${d.src}.jpg`} />
                        </NavLink>
                    </li>)}
            </ul>
        </div>
    )

}

export default DogList;