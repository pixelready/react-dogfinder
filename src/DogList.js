import { NavLink } from "react-router-dom";

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