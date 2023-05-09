import {render, screen} from '@testing-library/react';
import BookShelfChanger from './BookShelfChanger';
import { MemoryRouter } from 'react-router-dom';

it('testing home page', () => {
    const bookInfo = {id: '22', title:'hh', shelf: 'read'};

    render(
        <MemoryRouter>
            <BookShelfChanger book={bookInfo} />
        </MemoryRouter>
    )

    const  select = screen.getByTestId("select");
    expect(select).toBeInTheDocument;
    
})