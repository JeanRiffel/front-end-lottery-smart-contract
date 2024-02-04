import { render, screen } from '@testing-library/react';
import Button from '../customButton';

describe('customButton', ()=>{
  it('should render button',()=>{
    const myButton = 'myButton';
    render(<Button
        text='myButton'
    />);

    const myButtonRendered = screen.getByText(myButton);

    expect(myButtonRendered).toBeInTheDocument();
  })

});