import React from 'react'
import {Box} from '@mui/material'
import BookFilter from './BookFilter'
//import {BookContainerStyles} from './BookStyles'

const BookContainer = () => {
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