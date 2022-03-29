import React from 'react';
import ReactDOM from 'react-dom';

import { fireEvent, screen } from '@testing-library/dom';

import Profile from './Profile';

test('Profile, given click "hide details" button, shows "display details" button', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Profile 
            name="John Doe"
            title="Team Lead"
            details="This is my 5th year and I love helping others"
        />,
        div
    );
    document.body.appendChild(div);

    const hideDetailsBtn = screen.getByRole('button', { name: /hide details/i });

    fireEvent.click(hideDetailsBtn);
    const displayDetailsBtn = screen.getByRole('button', { name: /display details/i });

    expect(displayDetailsBtn).toBeTruthy();

    // Test cleanup
    div.remove();
});