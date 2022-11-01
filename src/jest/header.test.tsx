import { ApolloProvider } from "@apollo/client";
import { expect } from "@jest/globals";
import renderer from "react-test-renderer";
import { client } from "../cache";
import Header from "../common/components/header/Header";

describe("Header", () => {
  it("snapshot", () => {
    const tree = renderer
      .create(
        <ApolloProvider client={client}>
          <Header></Header>
        </ApolloProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
