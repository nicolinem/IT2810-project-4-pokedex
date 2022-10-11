import React from "react";

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  name: string;
  value?: string;
};
function InputField({ onChange, name, placeholder, value = "" }: Props) {
  return (
    <input 
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        value={value}
      />
  );
}

export default InputField;
