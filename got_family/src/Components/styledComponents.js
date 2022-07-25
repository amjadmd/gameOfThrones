import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

export const StyledCard = styled(Card)`
  width: 30%;
  margin: 10px;
  border: 1px solid;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    border: 1px solid #16ab4d;
    box-shadow: 0px 0px 1px rgb(0 0 0 / 16%), 0px 8px 24px rgb(0 0 0 / 13%);
    borderradius: 6px;
  }
`;
