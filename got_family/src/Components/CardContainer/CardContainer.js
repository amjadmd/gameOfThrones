import React, { useEffect, useState } from "react";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { fetchApi } from "../fetchApi";
import { booksUrl } from "../constants";
import { StyledCard } from "../styledComponents";

const CardConatiner = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  console.log(data?.length, "data");
  useEffect(() => {
    fetchApi(booksUrl, setLoading, setData);
  }, []);

  return (
    <>
      {loading &&
        data?.length > 0 &&
        data?.map((item, index) => (
          <StyledCard  key={index}>
            <CardHeader title={item?.name} subheader={item?.released} />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item?.publisher}
              </Typography>
            </CardContent>
          </StyledCard>
        ))}
    </>
  );
};

export default CardConatiner;
