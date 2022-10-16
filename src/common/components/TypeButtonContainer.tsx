import React from "react";
import Stack from "@mui/material/Stack";
import TypeButton from "./TypeButton";
import { Button } from "@mui/material";


const TypeButtonContainer = () => {

    return (
        <div className="columnContainer">
            <div className="rowContainer">
                <TypeButton label="Bug" backgroundColor="#B2BE55" ></TypeButton>
                <TypeButton label="Dark" backgroundColor="5E4C4C"></TypeButton>
                <TypeButton label="Dragon" backgroundColor="5E4C4C"></TypeButton>
                <TypeButton label="Electric" backgroundColor="5E4C4C"></TypeButton>
                <TypeButton label="Fairy" backgroundColor="5E4C4C"></TypeButton>
                <TypeButton label="Fighting" backgroundColor="5E4C4C"></TypeButton>
                <TypeButton label="Fire" backgroundColor="5E4C4C"></TypeButton>
                <TypeButton label="Flying" backgroundColor="5E4C4C"></TypeButton>
                <TypeButton label="Ghost" backgroundColor="5E4C4C"></TypeButton>
            </div>
            <div className="rowContainer">
                <TypeButton label="Ground" backgroundColor="5E4C4C"></TypeButton>
                <TypeButton label="Ice" backgroundColor="5E4C4C"></TypeButton>
                <TypeButton label="Normal" backgroundColor="5E4C4C"></TypeButton>
                <TypeButton label="Poison" backgroundColor="5E4C4C"></TypeButton>
                <TypeButton label="Psychic" backgroundColor="5E4C4C"></TypeButton>
                <TypeButton label="Rock" backgroundColor="5E4C4C"></TypeButton>
                <TypeButton label="Steel" backgroundColor="5E4C4C"></TypeButton>
                <TypeButton label="Water" backgroundColor="5E4C4C"></TypeButton>
                <TypeButton label="Grass" backgroundColor="5E4C4C"></TypeButton>
             </div>
         </div>
    )
}

export default TypeButtonContainer;