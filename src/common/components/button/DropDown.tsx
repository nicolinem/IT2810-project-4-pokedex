import React, { useEffect, useState } from 'react';

type DropDownProps = {
  types: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  typeSelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
  types,
  typeSelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);


  const onClickHandler = (type: string): void => {
    typeSelection(type);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div  className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {types.map(
          (type: string, index: number): JSX.Element => {
            return (
              <div className="text-black block py-2 px-4 bg-white hover:bg-gray-100 ">
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(type);
                }}
              >
                {type}
                </p>
                </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default DropDown;