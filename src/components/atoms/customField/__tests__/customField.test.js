import { render, screen } from '@testing-library/react';
import CustomField from '../customField'

describe('customField', () => {
  it('Should render customField', ()=>{
    const labelField = 'My Field';
    render(<CustomField 
      label={labelField} 
    />);
    const labelElementRendered = screen.getByLabelText(labelField);
  
    expect(labelElementRendered).toBeInTheDocument();  
  });

});
