import getBooksService from "./bookService";

const getBooksAction = () => async (dispatch) => {
    try{
        const books = await getBooksService();
        dispatch({
            type: 'BOOKLIST',
            payload: books.data
        })
    }catch(error){
        console.error(error);
    }
}
export default getBooksAction;