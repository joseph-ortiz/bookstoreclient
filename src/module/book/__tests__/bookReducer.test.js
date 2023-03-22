import bookReducer, { INITIAL_BOOK_REDUCER_STATE } from "../bookReducer"

describe('bookReducer', () => {
    it('should return right new state', () => {
        let testBook = {
            id: 1,
            title: 'test title',
            description: 'des',
            releaseYear: 2020
        };
        const action  = {
            type: 'BOOKLIST',
            payload: [testBook]
            
        }
        const newState  = bookReducer(INITIAL_BOOK_REDUCER_STATE, action);
        expect(newState).toEqual({
            books: [testBook]
        });
    })
})