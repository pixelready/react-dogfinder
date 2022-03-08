import { NavLink } from "react-router-dom";

/**
 * Returns list of dog names as links
 * 
 * Props: dogs [{name: "", age: #, src: "", facts: []}]
 * 
 * State: None
 * 
 * App --> Nav
 */

function Nav({dogs}){
    return (
        <div>

            <NavLink exact to="/dogs">All Dogs</NavLink>
            {dogs.map(d => 
                <NavLink key={d.name} exact to={`/dogs/${d.src}`} >
                    {d.name}
                </NavLink>
            )}
        </div>
        
        
    )
}

export default Nav;