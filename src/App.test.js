import Router from "react-router";
Router.useParams = jest.fn();
import DogDetails from './DogDetails';
import { MemoryRouter } from 'react-router-dom';
import App from './App';


import { render, screen, waitFor } from '@testing-library/react';

// test('renders learn react link', () => {
//   Router.useParams.mockReturnValue({a: "b"});	
//   render(<DogDetails />)
// });

it('renders the homepage/doglist page', async function () {
  const { getByText } = await Promise.resolve(render(
    <MemoryRouter initialEntries={['/']}>
      <App />  
    </MemoryRouter>
  ));
  
  const pText = getByText('Loading...');
  expect(pText).toBeInTheDocument();
})

