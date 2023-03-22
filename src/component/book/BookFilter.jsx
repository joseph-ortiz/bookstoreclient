import React from "react";
import { Box, Paper } from "@mui/material";
import { bookFilter, bookFilterPaper } from "./BookStyles";
const BookFilter = () => {
  return (
    <Box
      sx={bookFilter}
    >
      <Paper
        sx={bookFilterPaper}
      >
        book filter
      </Paper>
    </Box>
  );
};

export default BookFilter;
