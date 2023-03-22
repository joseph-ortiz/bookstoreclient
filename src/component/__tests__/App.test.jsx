import React from 'react'
import renderWithRedux from '../../util/testutil';
import App from '../App';

describe('App Component', () => {
  it("should render app with error", () => {
    const { asFragment } = renderWithRedux(<App />,{})
    expect(asFragment()).toMatchSnapshot();
  });
});
