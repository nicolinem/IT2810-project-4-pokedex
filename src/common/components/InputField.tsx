import React from "react";

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  name: string;
  value?: string;
};
function InputField({ onChange, name, placeholder, value = "" }: Props) {
  return (
    <div className="">
    <input className=""
    onChange={onChange}
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

export default InputField;
