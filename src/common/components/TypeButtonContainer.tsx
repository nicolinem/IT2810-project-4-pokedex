import TypeButton from "./button/TypeButton";
import { matchType } from "../../types/pokemon.utils";
import { useState } from "react";

type props = {
    getActiveTypes: (activeTypes: string[]) => void;
}

export const TypeButtonContainer: React.FC<props> = ({getActiveTypes}) => {

    const [activeTypes, setactiveTypes] = useState<string[]>([]);

    const types: string[] = [
        "bug",
        "dark",
        "dragon",
        "electric",
        "fairy",
        "fighting",
        "fire",
        "flying",
        "ghost",
        "ground",
        "ice",
        "normal",
        "poison",
        "psychic",
        "rock",
        "steel",
        "water",
        "grass"
    ];

    

    const activateButton = (type: string): void => {
        var currentTypes: string[] = activeTypes;

        if (currentTypes.includes(type)) {
            const index = currentTypes.indexOf(type)
            currentTypes.splice(index,1)
            setactiveTypes(currentTypes)
        } else{
            currentTypes.push(type);
            setactiveTypes(currentTypes);
        }

        getActiveTypes(activeTypes);
    };

    

    const typeButtons = (types: string[]) => {
        return(
        types.map((type: string) => (
            <TypeButton type={matchType(type)} activateButton={activateButton}></TypeButton>
        ))
    );};

return (
    <div className="border-2 border-white rounded-xl">
        <div className="flex flex-wrap justify-center gap-4 m-8 w-11/12">
            {typeButtons(types)}
        </div>
    </div>
)

}
