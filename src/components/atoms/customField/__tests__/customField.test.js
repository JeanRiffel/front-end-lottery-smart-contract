import { render, screen } from '@testing-library/react';
import CustomField from '../customField'

test('render customField', () => {
  const labelField = 'My Field';
  render(<CustomField 
    label={labelField} 
  />);
  const labelElement = screen.getByLabelText(labelField);

  expect(labelElement).toBeInTheDocument();  
});
