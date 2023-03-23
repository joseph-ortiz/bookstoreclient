import React from "react";
import Proptypes from 'prop-types'
import {Box, Typography, Paper, Avatar} from '@mui/material'
import { bookListItemPaper, bookListItemImage } from "./BookStyles";


const propTypes = {
    book: Proptypes.shape(
        {
            id: Proptypes.string.isRequired,
            title: Proptypes.string.isRequired,
            description: Proptypes.string.isRequired,
            releaseYear: Proptypes.number.isRequired
        }
    ).isRequired
};

const BookListItem = ({book}) => {
    return(
        <Box mb={2}>
            <Paper elevationbn={2} sx={bookListItemPaper}>
                <Avatar variant="square" sx={bookListItemImage}>
                    {book.title}
                </Avatar>
                <Box>
                    <Typography variant="h5">
                    {book.title}
                    </Typography>
                    <Typography variant="h5">
                    {book.description}
                    </Typography>
                    <Typography variant="h5">
                    {book.releaseYear}
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
}
BookListItem.propTypes = propTypes;
export default BookListItem;
