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
        className="border rounded-full border-current w-1/3 h-16 pl-5"
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        value={value}
        //trenger vi en type={text}
      />
  );
}

export default InputField;
