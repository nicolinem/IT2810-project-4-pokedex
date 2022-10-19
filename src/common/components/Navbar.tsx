
import PokemonLogo from "../../public/PokemonLogo.png";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useSignout } from "../../hooks/useSignOut";
import { IsLoggedIn } from "../../cache";

export default function Navbar() {
  const loggedIn = IsLoggedIn();

  const { signout } = useSignout();

  return (
    <Box sx={{ justifyContent: "space-between" }}>
      <AppBar position="static" color="secondary" sx={{justifyContent: "space-between"}}>
        <Toolbar sx={{justifyContent: "space-between"}}>
          <Box>
          <IconButton
            size="small"
            edge="start"
            aria-label="menu"
            sx={{ width: 100
             }}>
            <img src={PokemonLogo} alt="Logo" width={100}></img>
          </IconButton>
          </Box>
          <Box>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, justifyContent: "center", fontStyle: "normal", fontFamily: "Inter", letterSpacing: 4, fontWeight: "bold" }}>
            POKEDEX
          </Typography>
          </Box>

          {loggedIn && 
        <button onClick={signout}>Sign Out</button>
      }
          <Box>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


