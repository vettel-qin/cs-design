import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button, { ButtonProps } from "./button";

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  size: "lg",
  btnType: "primary",
  className: "cs-class",
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe("test Button component", () => {
  it("should render the correct default button 针对什么都不加渲染默认按钮", () => {
    render(<Button {...defaultProps}>cs design</Button>);
    const element = screen.getByText("cs design") as HTMLButtonElement;
    // expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    // expect(element).toHaveClass("btn btn-default");
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it("should render the correct component based on different props 根据不同的props渲染不同的组件", () => {
    render(<Button {...testProps}>cs design</Button>);
    const element = screen.getByText("cs design");
    expect(element.tagName).toEqual("BUTTON");
    //expect(element).toBeInTheDocument();
  });
  it("should render a link when btnType equals links and href is provided 渲染a链接", () => {
    render(
      <Button btnType="link" href="http://dummyurl">
        Link
      </Button>
    );
    const element = screen.getByText("Link");
    // expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    // expect(element).toHaveClass("btn btn-link");
  });

  it("should render disabled button when disabled set to true", () => {
    render(<Button {...disabledProps}>cs design</Button>);
    const element = screen.getByText("cs design") as HTMLButtonElement;
    // expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
