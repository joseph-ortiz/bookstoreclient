import React from "react";
import { Box, Paper } from "@mui/material";
//import { BookFilterStyles, BookFilterPaperStyles } from "./BookStyles";
const BookFilter = () => {
  return (
    <Box
      sx={{
        width: "20%",
        height: "500px",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        book filter
      </Paper>
    </Box>
  );
};

export default BookFilter;
