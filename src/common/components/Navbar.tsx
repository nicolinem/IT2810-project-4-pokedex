import React from "react";
import PokemonLogo from "../../public/PokemonLogo.png";
//import {Link} from "react-router-dom";



export const Navbar: React.FC = () => {

    return (
        <nav>   
            <div className="Logo">
                <ul className="NavList">
                    <li>
                        <img src={PokemonLogo} alt="Logo" />
                    </li>
                    <li>
                        <a>PokeDatabase</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

