import React from "react";
import renderWithRedux from "../../../util/testutil";
import BookContainer from "../BookContainer";

describe('BookContainer', () => {
    it('should render with without error', () => {
        let testBook = {
            id: 1,
            title: 'test title',
            description: 'des',
            releaseYear: 2020
        };
        const  { getByText } = renderWithRedux(<BookContainer/>, {
            initialState: {
                bookReducer: {
                    books: [testBook]
                }
            }
        })
        expect(getByText('Here we will display all books.')).toBeInTheDocument();
    })
})