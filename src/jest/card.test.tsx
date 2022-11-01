import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Card from "../common/components/card/Card";

describe("Card", () => {
  it("Snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Card
            pokemon={{
              attack: 65,
              defence: 65,
              height: 7,
              hp: 45,
              imageUrl:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
              name: "bulbasaur",
              pokemonID: 1,
              sp_attack: 49,
              sp_defence: 65,
              speed: 45,
              type1: "grass",
              type2: "poison",
              weight: 69,
            }}
          ></Card>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
