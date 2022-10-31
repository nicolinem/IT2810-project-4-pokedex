import { gql, useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { useParams } from "react-router-dom";
import { getImageUrl } from "../api/utils/match.utils";
import Comments from "../common/components/commentField/Comments";
import { StatChart } from "../common/components/statChart/StatChart";
import { StyledTab, TabPanel } from "../common/components/tabs/TabPanel";
import { Type } from "../common/components/Type";
import { matchType } from "../types/pokemon.utils";
import { parsePokemonData } from "../utils/data.utils";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const PokemonPage = () => {
  const [value, setValue] = React.useState(0);
  const { id } = useParams<{ id: string }>();
  const newID = parseInt(id!);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const GET_POKEMON = gql`
    query ($input: Int) {
      getPokemonOnID(input: $input) {
        name
        pokemonID
        attack
        defence
        sp_attack
        sp_defence
        speed
        height
        weight
        hp
        imageUrl
        type1
        type2
      }
    }
  `;

  const { error, loading, data } = useQuery(GET_POKEMON, {
    variables: { input: newID },
  });

  if (error) {
    console.log(JSON.stringify(error, null, 2));
    return <div>Error</div>;
  }

  if (loading) {
    return <div>Loading</div>;
  }

  if (!data) {
    return <></>;
  }

  const { getPokemonOnID } = data;

  const pokemonStats = parsePokemonData(getPokemonOnID[0]);

  return (
    <div>
      <div className="relative bg-[#41444a] text-center h-80 w-full text-gray-50	">
        <div className="absolute bottom-0 ml-64 xxs:ml-10 xs:ml-16 sm:ml-24 md:ml-32 lg:ml-44 xl:ml-52 2xl:ml-64">
          <img
            className="flex items-start lg:h-64 lg:w-64 xxs:h-44 xxs:w-44 xs:h-48 xs:w-48 sm:w-52 sm:h-52 md:h-56 md:w-56"
            src={getImageUrl(getPokemonOnID[0].pokemonID)}
            alt="image"
          />
        </div>

        <header className="absolute bottom-0 left-0 right-0 py-24 mx-auto text-4xl font-extrabold tracking-widest">
          <div>
            {getPokemonOnID[0].name.charAt(0).toUpperCase() +
              getPokemonOnID[0].name.slice(1)}
          </div>
          <div className="flex items-center justify-center gap-4 mt-5">
            <Type type={matchType(getPokemonOnID[0].type1)}></Type>
            <Type type={matchType(getPokemonOnID[0].type2)}></Type>
          </div>
        </header>
      </div>

      <Box sx={{ width: "100%" }}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", bgcolor: "#C0EEDB" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
            TabIndicatorProps={{
              style: {
                backgroundColor: "#444444",
              },
            }}
          >
            <StyledTab label="Statistics" {...a11yProps(0)} />
            <StyledTab label="Reviews" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <StatChart pokemonStats={pokemonStats} type="normal"></StatChart>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Comments></Comments>
        </TabPanel>
      </Box>
    </div>
  );
};
