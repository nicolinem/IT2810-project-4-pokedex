import React from "react";
import Stack from "@mui/material/Stack";
import TypeChip from "./TypeChip";


const TypeChipContainer = () => {

    return (
        <Stack direction="column" spacing ={2}>
            <Stack direction="row" spacing={2}>
                <TypeChip label="Bug" ></TypeChip>
                <TypeChip label="Dark"></TypeChip>
                <TypeChip label="Dragon"></TypeChip>
                <TypeChip label="Electric"></TypeChip>
                <TypeChip label="Fairy"></TypeChip>
                <TypeChip label="Fighting"></TypeChip>
                <TypeChip label="Fire"></TypeChip>
                <TypeChip label="Flying"></TypeChip>
                <TypeChip label="Ghost"></TypeChip>
            </Stack>
            <Stack direction="row" spacing = {2}>
                <TypeChip label="Ground" ></TypeChip>
                <TypeChip label="Ice"></TypeChip>
                <TypeChip label="Normal"></TypeChip>
                <TypeChip label="Poison"></TypeChip>
                <TypeChip label="Psychic"></TypeChip>
                <TypeChip label="Rock"></TypeChip>
                <TypeChip label="Steel"></TypeChip>
                <TypeChip label="Water"></TypeChip>
                <TypeChip label="Grass"></TypeChip>
            </Stack>
        </Stack>
    )
}

export default TypeChipContainer;