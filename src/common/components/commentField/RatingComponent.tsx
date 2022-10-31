import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Rating, styled } from "@mui/material";
import { useState } from "react";

export const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

type Props = {
    onChange: ((event: React.SyntheticEvent<Element, Event>, value: number | null) => void) | undefined
}

export default function CustomizedRating({onChange}: Props) {


  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value: number) =>
          `${value} Heart${value !== 1 ? "s" : ""}`
        }
        onChange={onChange}
        precision={0.5}
        icon={<FavoriteIcon />}
        emptyIcon={<FavoriteBorderIcon />}
      />
    </Box>
  );
}
