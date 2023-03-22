import React, { useEffect } from 'react'
import {Box} from '@mui/material'
import BookFilter from './BookFilter'
import { bookContainer } from './BookStyles'
import { useDispatch, useSelector } from 'react-redux'
import getBooksAction from '../../module/book/bookAction'
import { getBooksSelector } from '../../module/book/bookSelector'

const BookContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooksAction());
    } , [dispatch]);
    
    const books = useSelector(getBooksSelector);
    console.log(books);
    
    return(
        <Box sx={bookContainer}>
            <BookFilter />
            <Box>
                Here we will display all books.
                
            </Box>
        </Box>
        
    )
}

export default BookContainer