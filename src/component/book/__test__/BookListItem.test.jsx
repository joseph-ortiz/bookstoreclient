import React from "react";
import BookListItem from '../BookListItem'
import {render} from '@testing-library/react'

describe('BookListItem', () => {
    it('should render booklistitem without error', () => {
        const book = 
            {
              id: '1',
              title: "test title",
              description: "desc",
              releaseYear: 2020,
            };
            const {getByText, getAllByText} = render(<BookListItem book={book} />);
            expect(getAllByText('test title')[0]).toBeInTheDocument();
            expect(getAllByText('desc')[0]).toBeInTheDocument();
            expect(getAllByText('2020')[0]).toBeInTheDocument();
    })
})