import { gql, useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { useParams } from "react-router-dom";
import { getImageUrl } from "../api/utils/match.utils";
import { isLoggedInVar } from "../cache";
// import { IsLoggedIn } from "../cache";
import { NewReview } from "../common/components/NewReview";
import Reviews from "../common/components/Reviews";
import { StatChart } from "../common/components/statChart/StatChart";
import { StyledTab, TabPanel } from "../common/components/tabs/TabPanel";
import { TypeChip } from "../common/components/Type";
import useReviews from "../common/hooks/useReviews";
import { matchType } from "../types/pokemon.utils";
import { parsePokemonData } from "../utils/data.utils";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const PokemonPage = () => {
  let auth = isLoggedInVar()
  const [value, setValue] = React.useState(0);
  const { id } = useParams<{ id: string }>();
  const newID = parseInt(id!);
  const { reviews, refetchReviews } = useReviews();

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
    <div className=" relative bg-[#41444a] text-center h-80 w-full text-gray-50	">
      <div className="absolute bottom-0 ml-64 w-64 h-64
      ">
         <img
        className="object-cover w-full max-w-fit "
        src={getImageUrl(getPokemonOnID[0].pokemonID)}
        alt="image"
      />
        </div>
     
      <header className="absolute bottom-0 mx-auto left-0 right-0 text-4xl font-extrabold tracking-widest py-24">
        <div> {(getPokemonOnID[0].name).charAt(0).toUpperCase() + (getPokemonOnID[0].name).slice(1)}</div>
          <div className="flex items-center justify-center gap-4 mt-5">
            <TypeChip type={matchType(getPokemonOnID[0].type1)}></TypeChip>
            <TypeChip type={matchType(getPokemonOnID[0].type2)}></TypeChip>
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
          {auth && <NewReview refetchReviews={refetchReviews}></NewReview>}
          
          <Reviews refetchReviews={refetchReviews} reviews={reviews}></Reviews>
        </TabPanel>
      </Box>
    </div>
  );
};
