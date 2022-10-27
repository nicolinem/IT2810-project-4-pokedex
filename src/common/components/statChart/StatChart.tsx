import { LinearProgress, linearProgressClasses, styled } from "@mui/material";
import { ReactNode } from "react";
import { PokemonStats } from "../../../utils/data.utils";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 13,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#C0EEDB",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#92C6B0",
  },
}));

type Props = {
  pokemonStats: PokemonStats;
  type: string;
};

export const StatChart = (props: Props) => {
  const stats = Object.entries(props.pokemonStats);

  return (
    <div>
      {stats.map<ReactNode>((value: [string, number]) => {
        return (
          <div className="w-1/4 my-5 rounded-full font-poppins">
            {value[0].toUpperCase()}
            <BorderLinearProgress variant="determinate" value={value[1]} />
          </div>
        );
      })}
    </div>
  );
};
