import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';
import { BrowserRouter } from 'react-router-dom'; 

describe('Homepage', () => {
  

  test('revisar el correcto número de links', () => {
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    );

    // Se revisa que existen 3 enlaces
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
  });

  
});
