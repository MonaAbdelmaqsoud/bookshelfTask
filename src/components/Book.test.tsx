import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Book from './Book';


describe('testing the bookElement', ()=>{
    it('testing the Book ifo are shown correctly', () => {
        const bookshelfContent = {id: 'VocWKgK9SxQC', title:'Emile', authors: 
        ['Jean-Jacques Rousseau']};
        function  onChangeShelfHandler(){}
        render(
            <MemoryRouter>
                <Book book={bookshelfContent} />
            </MemoryRouter>
        )

        const element = screen.getByText('Emile')
        expect(element).toBeInTheDocument;
    });
})