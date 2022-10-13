import React from "react";
import Chip from '@mui/material/Chip';

type props = {

  label: string;
  onClick?: () => void;
  sx?: any;

};

const TypeChip: React.FC<props> = ({
  label, 
  onClick,
  sx
  }) => {

  return (
    <Chip variant="filled"
          label={label}
          onClick={() => onClick} 
          sx={{ 
            width: 83,
            height: 28,
            sx
            }}/>
  );
};


export default TypeChip;