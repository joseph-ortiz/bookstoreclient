import React from "react";
import renderWithRedux from "../../../util/testutil";
import BookContainer from "../BookContainer";
import BookList from "../BookList";

jest.mock("../BookList");
describe("BookContainer", () => {
  beforeEach(() => {
    BookList.mockImplementation(() => <div>mock booklist comp</div>);
  });

  it("should render with without error", () => {
    const books = [
      {
        id: 1,
        title: "test title",
        description: "des",
        releaseYear: 2020,
      },
    ];
    renderWithRedux(<BookContainer />, {
      initialState: {
        bookReducer: {
          books,
        },
      },
    });
    //expect(getByText('Here we will display all books.')).toBeInTheDocument();
    expect(BookList).toHaveBeenCalledWith({ books }, {});
  });
});
