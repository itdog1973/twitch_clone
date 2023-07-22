import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}) as typeof Box;

export default FlexBetween;
