import React from "react";
import { render, fireEvent} from "@testing-library/react";
import BoxList from "./BoxList";

test("renders without crashing", () => {
    render(<BoxList/>);
})

test("matches snapshot", () => {
    const {asFragment } = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
})

test("should add a new box", () => {
    const { queryByText, getByLabelText, getByTestId } = render(<BoxList/>);
    const bgColorInput = getByLabelText("Background Color");
    const widthInput = getByLabelText("Width");
    const heightInput = getByLabelText("Height");
    const btn = queryByText("Add Box");
    
    fireEvent.change(bgColorInput, { target: { value: "blue" }});
    fireEvent.change(widthInput, { target: { value: "10" }});
    fireEvent.change(heightInput, { target: { value: "10" }});
    fireEvent.click(btn);

    expect(getByTestId("box")).toBeInTheDocument();
})

test("should remove a box", () => {
    const { queryByText, getByLabelText, getByTestId } = render(<BoxList/>);
    const bgColorInput = getByLabelText("Background Color");
    const widthInput = getByLabelText("Width");
    const heightInput = getByLabelText("Height");
    const btn = queryByText("Add Box");
    
    fireEvent.change(bgColorInput, { target: { value: "blue" }});
    fireEvent.change(widthInput, { target: { value: "10" }});
    fireEvent.change(heightInput, { target: { value: "10" }});
    fireEvent.click(btn);

    expect(getByTestId("box")).toBeInTheDocument();

    const removeBtn = queryByText("X");
    fireEvent.click(removeBtn);
    expect(removeBtn).not.toBeInTheDocument();
})