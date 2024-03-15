import React from "react";
import { render, fireEvent} from "@testing-library/react";
import TodoList from "./TodoList";

test("renders without crashing", () => {
    render(<TodoList/>);
})

test("matches snapshot", () => {
    const {asFragment } = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot();
})

test("should add a new todo", () => {
    const { queryByText, getByLabelText, getByTestId } = render(<TodoList/>);
    const todo = getByLabelText("Todo");
    const btn = queryByText("Add Todo");
    
    fireEvent.change(todo, { target: { value: "test" }});
    fireEvent.click(btn);

    expect(getByTestId("todo")).toBeInTheDocument();
})

test("should remove a todo", () => {
    const { queryByText, getByLabelText, getByTestId } = render(<TodoList/>);
    const todo = getByLabelText("Todo");
    const btn = queryByText("Add Todo");
    
    fireEvent.change(todo, { target: { value: "test" }});
    fireEvent.click(btn);

    expect(getByTestId("todo")).toBeInTheDocument();

    const removeBtn = queryByText("X");
    fireEvent.click(removeBtn);
    expect(removeBtn).not.toBeInTheDocument();
})