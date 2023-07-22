import FlexBetween from "@/components/FlexBetween";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import DropDown from "@/components/DropDown";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Navbar = () => {
  const { palette } = useTheme();
  const fontColor = palette.text.primary;
  const navigate = useNavigate();
  const main = palette.primary.light;
  const isNonMobileScreens = useMediaQuery("(min-width: 600px)");

  return (
    <FlexBetween
      sx={{
        padding: "1rem 1%",
      }}
    >
      {/* Left */}
      <FlexBetween gap="1.5rem">
        <Box height="60px" width="60px">
          <img src={logo} alt="logo" height="100%" width="100%" />
        </Box>
        {isNonMobileScreens ? (
          <Typography
            fontWeight="bold"
            fontSize="clamp(0.5rem, 1.5rem, 2rem)"
            color={main}
            onClick={() => navigate("/home")}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Browser
          </Typography>
        ) : (
          <IconButton>
            <DevicesIcon sx={{ fontSize: "30px", color: main }} />
          </IconButton>
        )}

        <DropDown />
      </FlexBetween>
      {/* Middle */}
      <FlexBetween></FlexBetween>
      {/* Right */}
      <FlexBetween></FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
