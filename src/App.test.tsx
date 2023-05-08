import {render, screen} from '@testing-library/react';
import HomePage from './Pages/Home';
import SearchPage from './Pages/Search';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('testing routes', () =>{

    const books = [{id: '22', title:'hh'}];
        const searchResult = [{id: '22', title:'hh'}];
        function  onChangeShelfHandler(){}
        function  onSearch(){}
    it('testing the HomePage Route',()=>{
        
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/search' element={<SearchPage/>}/>
                </Routes>
            </MemoryRouter>
        );

        const searchLink = screen.getByRole('link', {name: "Search For A book"})
        expect(searchLink).toBeInTheDocument;
    })

    it('testing the SearchPage Route',()=>{
        
        render(
            <MemoryRouter initialEntries={['/search']}>
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/search' element={<SearchPage />}/>
                </Routes>
            </MemoryRouter>
        );

        const searchLink = screen.getByRole('link', {name: "Go back to home"})
        expect(searchLink).toBeInTheDocument;
    })
})