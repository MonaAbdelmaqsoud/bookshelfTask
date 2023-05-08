import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Book from './Book';

const bookShelfes= [
    { id: "currentlyReading", title: "Currently Reading" },
    { id: "wantToRead", title: "Want to Read" },
    { id: "read", title: "Read" },
  ];
describe('testing the bookElement', ()=>{
    test('testing the Book ifo are shown correctly', () => {
        const bookshelfContent = {id: 'VocWKgK9SxQC', title:'Emile', authors: 
        ['Jean-Jacques Rousseau']};
        function  onChangeShelfHandler(){}
        render(
            <MemoryRouter>
                <Book book={bookshelfContent} onChangeShelf={onChangeShelfHandler}/>
            </MemoryRouter>
        )

        const element = screen.getByText('Emile')
        expect(element).toBeInTheDocument;
    });
})