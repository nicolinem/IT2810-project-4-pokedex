import { gql, useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getImageUrl } from "../api/utils/match.utils";
import { isLoggedInVar } from "../cache";
import Button from "../common/components/button/Button";
import LoginButton from "../common/components/button/LoginButton";
import { NewReview } from "../common/components/NewReview";
import Reviews from "../common/components/Reviews";
import { StatChart } from "../common/components/statChart/StatChart";
import { StyledTab, TabPanel } from "../common/components/tabs/TabPanel";
import { Type } from "../common/components/Type";
import useReviews from "../common/hooks/useReviews";
import { useSignout } from "../common/hooks/useSignOut";
import { matchType } from "../types/pokemon.utils";
import { parsePokemonData } from "../utils/data.utils";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const PokemonPage = () => {
  let auth = isLoggedInVar();
  const [value, setValue] = React.useState(0);
  const { id } = useParams<{ id: string }>();
  const newID = parseInt(id!);
  const { reviews, refetchReviews } = useReviews();
  const { signout } = useSignout();
  const navigate = useNavigate();

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
      <div className=" relative bg-[#121A36] text-center h-80 w-full text-gray-50	">
        <div className="absolute left-5 top-5 z-40">
           <Button buttonType="primary"  onClick={() => navigate("/")}> Back to Search Page </Button>
        </div>

        {
          !auth ?
          <div className="absolute right-5 top-5 z-40">
          <LoginButton></LoginButton>
            </div> :
            <div className="absolute right-5 top-5 z-10">
            <Button buttonType="primary"  onClick={signout}> Sign out </Button>
          </div>
        }
        
       <div className="absolute bottom-0 ml-64 xxs:ml-0 xs:ml-14 sm:ml-20 md:ml-28 lg:ml-44 xl:ml-52 2xl:ml-64">
          <img
            className="flex items-start lg:h-64 lg:w-64 xxs:h-44 xxs:w-44 xs:h-48 xs:w-48 sm:w-52 sm:h-52 md:h-56 md:w-56"
            src={getImageUrl(getPokemonOnID[0].pokemonID)}
            alt="image"
          />
        </div>
        <div className="z-10 absolute right-0">

        </div>

        <header className="absolute bottom-0 left-0 right-0 py-24 mx-auto text-4xl font-extrabold tracking-widest ">
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
          <Reviews refetchReviews={refetchReviews} reviews={reviews}></Reviews>

          {auth ? <NewReview refetchReviews={refetchReviews} />
          : <div className="flex flex-col items-center" > Sign in to leave a review </div>}
        </TabPanel>
      </Box>
    </div>
  );
};
