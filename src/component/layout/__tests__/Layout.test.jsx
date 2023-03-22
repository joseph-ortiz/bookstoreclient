import { render, screen } from '@testing-library/react';
import Layout from '../Layout';
import React from 'react'

describe('Layout', () => {
  it('should render layout component', () => {
    const {} = render(
      <Layout>
        <div> test component</div>
      </Layout>
    );
    
    expect(screen.getByText('test component')).toBeInTheDocument();
  })
})
