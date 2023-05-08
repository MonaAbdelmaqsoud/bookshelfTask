import {render, screen} from '@testing-library/react';
import BookShelf from './BookShelf';
import { MemoryRouter } from 'react-router-dom';

const bookShelfes= [
    { id: "currentlyReading", title: "Currently Reading" },
    { id: "wantToRead", title: "Want to Read" },
    { id: "read", title: "Read" },
  ];
describe('testing the shelves are rendring correctly', ()=>{
    test('testing home page', () => {
        const bookshelfContent = [{id: '', title:''}];
        function  onChangeShelfHandler(){}
        render(
            <MemoryRouter>
                <BookShelf shelfData={bookShelfes[0]} books={bookshelfContent} onChangeShelf={onChangeShelfHandler}/>
            </MemoryRouter>
        )

        const element = screen.getByRole('heading', {name: 'Currently Reading'})
        expect(element).toBeInTheDocument;
    });


    // test('testing home page', () => {
    //     const bookshelfContent = [{id: '', title:''}];
    //     function  onChangeShelfHandler(){}
    //     render(
    //         <MemoryRouter>
    //             <BookShelf shelfData={bookShelfes[1]} books={bookshelfContent} onChangeShelf={onChangeShelfHandler}/>
    //         </MemoryRouter>
    //     )
        
    //     const  element = screen.getByText("Want to Read");
    //     expect(element).toBeInTheDocument;
    // });

    // test('testing home page', () => {
    //     const bookshelfContent = [{id: '', title:''}];
    //     function  onChangeShelfHandler(){}
    //     render(
    //         <MemoryRouter>
    //             <BookShelf shelfData={bookShelfes[2]} books={bookshelfContent} onChangeShelf={onChangeShelfHandler}/>
    //         </MemoryRouter>
    //     )
        
    //     const  element = screen.getByText("Read");
    //     expect(element).toBeInTheDocument;
    // });
})