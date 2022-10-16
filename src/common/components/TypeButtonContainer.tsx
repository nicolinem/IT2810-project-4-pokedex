import TypeButton from "./TypeButton";



const TypeButtonContainer = () => {

    return (
        <div id="TypeButtonContainer" className="flex-col content-evenly">
            <div className="flex justify-evenly">
                <TypeButton label="Bug" color="bg-lime-400 hover:bg-lime-500"></TypeButton>
                <TypeButton label="Dark" color="bg-yellow-800 hover:bg-yellow-900" ></TypeButton>
                <TypeButton label="Dragon" color="bg-purple-300 hover:bg-purple-400" ></TypeButton>
                <TypeButton label="Electric" color="bg-amber-400 hover:bg-amber-500" ></TypeButton>
                <TypeButton label="Fairy" color="bg-red-400 hover:bg-red-500"></TypeButton>
                <TypeButton label="Fighting" color="bg-orange-800 hover:bg-orange-900"></TypeButton>
                <TypeButton label="Fire" color="bg-red-600 hover:bg-red-700" ></TypeButton>
                <TypeButton label="Flying" color="bg-teal-500 hover:bg-teal-600" ></TypeButton>
                <TypeButton label="Ghost" color="bg-violet-500 hover:bg-violet-600"></TypeButton>
            </div>
            <div className="flex justify-evenly">
                <TypeButton label="Ground" color="bg-amber-500 hover:bg-amber-600"></TypeButton>
                <TypeButton label="Ice" color="bg-emerald-300 hover:bg-emerald-400"></TypeButton>
                <TypeButton label="Normal" color="bg-orange-600 hover:bg-orange-700" ></TypeButton>
                <TypeButton label="Poison" color="bg-purple-800 hover:bg-purple-900"></TypeButton>
                <TypeButton label="Psychic" color="bg-green-400 hover:bg-green-500" ></TypeButton>
                <TypeButton label="Rock" color="bg-amber-200 hover:bg-amber-300" ></TypeButton>
                <TypeButton label="Steel" color="bg-indigo-300 hover:bg-indigo-400" ></TypeButton>
                <TypeButton label="Water" color="bg-sky-500 hover:bg-sky-600" ></TypeButton>
                <TypeButton label="Grass" color="bg-lime-600 hover:bg-lime-700"></TypeButton>
             </div>
         </div>
    )
}

export default TypeButtonContainer;