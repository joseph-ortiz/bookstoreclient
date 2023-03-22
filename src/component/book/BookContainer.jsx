import React from 'react'
import {Box} from '@mui/material'
import BookFilter from './BookFilter'
//import {BookContainerStyles} from './BookStyles'
import { useDispatch } from 'react-redux'
import getBooksAction from '../../module/book/bookAction'

const BookContainer = () => {
    const dispatch = useDispatch();
    dispatch(getBooksAction());
    return(
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row'
        }}>
            <BookFilter />
            <Box>
                Here we will display all books.
            </Box>
        </Box>
        
    )
}

export default BookContainer