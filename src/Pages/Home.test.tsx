import { render, screen } from "@testing-library/react";
import HomePage from "./Home";
import { MemoryRouter } from "react-router-dom";

const books = [{ id: "22", title: "hh" }];
function onChangeShelfHandler() {}

test("testing home page", () => {
  render(
    <MemoryRouter>
      <HomePage books={books} onChangeShelfHandler={onChangeShelfHandler} />
    </MemoryRouter>
  );

  const element = screen.getByText("MyReads");
  expect(element).toBeInTheDocument;
});


