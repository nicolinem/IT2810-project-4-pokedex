import { expect } from "@jest/globals";
import renderer from "react-test-renderer";
import Footer from "../common/components/Footer";

describe("Footer", () => {
  it("snapshot", () => {
    const tree = renderer.create(<Footer></Footer>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
