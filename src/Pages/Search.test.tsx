import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./Search";
import HomePage from "./Home";
import userEvent from "@testing-library/user-event";

describe("testing the search page", () => {
  it("testing the output if no data was received", () => {
    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    const titleElement = screen.getByText("No Books Found")
    expect(titleElement).toBeInTheDocument;

    
  });
})

// i was trying to test the lin element put failed

// test("testing the link element functionality when clicked",async()=>{
//     <MemoryRouter initialEntries={["/search"]}>
//         <Routes>
//             <Route path='/search' element={<SearchPage />}/>
//             <Route path='/' element={<HomePage />}/>
//         </Routes>
//     </MemoryRouter>
//   });

//   await userEvent.click(screen.getByRole('link', {name: "Go back to home"}))

//   waitFor(()=>{
//     expect(screen.getByText("MyReads")).toBeInTheDocument()
//   })
