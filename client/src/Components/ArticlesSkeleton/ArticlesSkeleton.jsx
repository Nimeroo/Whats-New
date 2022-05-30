import { Skeleton, Grid } from "@mui/material";
import React from "react";

export const ArticlesSkeleton = () => {
  const skeletonArticles = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Grid alignItems="center" justifyContent="center" marginTop={3} container spacing={5}>
      {skeletonArticles.map((index) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Skeleton variant="rectangular" width={"100%"} height={200} />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </Grid>
        );
      })}
    </Grid>
  );
};
