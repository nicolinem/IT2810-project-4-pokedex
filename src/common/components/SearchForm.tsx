import React, { useEffect, useState } from "react";

import Button from "./Button";
import InputField from "./InputField";

interface FormProps {
  fetchData: (projectName: string, token: string) => void;
}

function SearchForm({}: FormProps) {

  const [pokemonNameNumberInputField, setRepoNameInput] = useState("");

  const onChangeSearchField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepoNameInput(event.target.value);
  };

  const buttonClicked = () => {};

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //TODO
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="">
          <InputField
            onChange={onChangeSearchField}
            name="Pokemon name or number"
            placeholder="Enter pokemon name or number"
            value={pokemonNameNumberInputField}
          />
        </div>

        <Button onClick={() => buttonClicked()}>
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchForm;
