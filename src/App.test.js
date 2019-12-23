import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders add new idea', () => {
    const {getByTestId} = render(<App />);
    const addNewElement = getByTestId(/addNew/i);
    expect(addNewElement).toBeInTheDocument();
});
