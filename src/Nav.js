import { NavLink } from "react-router-dom";

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