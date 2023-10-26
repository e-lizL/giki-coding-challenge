import { render, screen } from "@testing-library/react";
import MainText from "../components/MainText";

describe("MainText", () => {
  it("should render as expected and link to our homepage", () => {
    render(<MainText currentFootprint={"500"} />);
    const linkToTest = screen.getByRole("link");
    expect(linkToTest.getAttribute("href")).toMatchInlineSnapshot(`"https://giki.earth/"`);
  });
});
