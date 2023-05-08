import {render, screen} from '@testing-library/react';
import BookShelfChanger from './BookShelfChanger';
import { MemoryRouter } from 'react-router-dom';

test('testing home page', () => {
    const bookInfo = {id: '22', title:'hh', shelf: 'read'};
    function  onChangeShelfHandler(){}
    render(
        <MemoryRouter>
            <BookShelfChanger book={bookInfo} onChangeShelf={onChangeShelfHandler}/>
        </MemoryRouter>
    )

    const  select = screen.getByTestId("select");
    expect(select).toBeInTheDocument;
    
})