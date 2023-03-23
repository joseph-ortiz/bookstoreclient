import React from "react";
import Proptypes from 'prop-types'
import {Box} from '@mui/material'
import {bookList} from './BookStyles';
import BookListItem from './BookListItem'

const book  = {
    id: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    releaseYear: Proptypes.number.isRequired
};
const propTypes = {
    books: Proptypes.arrayOf(book).isRequired,
};

const BookList = ({books}) => {
    return(
        <Box sx={bookList}>
            {books.map((book) => {
                return <BookListItem book={book} key={book.id}></BookListItem>
            } )}
        </Box>
    )
}
BookList.propTypes = propTypes;
export default BookList