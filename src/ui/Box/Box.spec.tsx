import { render } from "@testing-library/react-native";
import { Box } from "./Box";

const mockBox = {
  children: "PlaneTracker",
  styles: { backgroundColor: "#FF0000", alignItems: "baseline" },
};

describe("Box component", () => {
  it("should render", () => {
    render(<Box>{mockBox.children}</Box>);
  });

  it("should render a box with default props", () => {
    const { getByTestId } = render(<Box>{mockBox.children}</Box>);

    const boxElement = getByTestId("box");

    expect(boxElement.props.children).toEqual(mockBox.children);

    expect(boxElement.props.style[0][0]).toEqual({
      alignItems: "center",
      backgroundColor: "#fff",
      flex: undefined,
      flexDirection: undefined,
      height: undefined,
      justifyContent: "center",
      margin: undefined,
      marginBottom: undefined,
      marginLeft: undefined,
      marginRight: undefined,
      marginTop: undefined,
      marginHorizontal: undefined,
      marginVertical: undefined,
      maxHeight: undefined,
      padding: undefined,
      paddingBottom: undefined,
      paddingRight: undefined,
      paddingLeft: undefined,
      paddingTop: undefined,
      paddingHorizontal: undefined,
      paddingVertical: undefined,
      width: undefined,
    });
  });

  it("should render a box with a children", () => {
    const { getByTestId } = render(<Box>{mockBox.children}</Box>);

    expect(getByTestId("box").props.children).toEqual(mockBox.children);
  });

  it("should render a box with a default style", () => {
    const { getByTestId } = render(<Box>{mockBox.children}</Box>);

    expect(getByTestId("box").props.style[0][0]).toEqual({
      alignItems: "center",
      backgroundColor: "#fff",
      flex: undefined,
      flexDirection: undefined,
      height: undefined,
      justifyContent: "center",
      margin: undefined,
      marginBottom: undefined,
      marginLeft: undefined,
      marginRight: undefined,
      marginTop: undefined,
      marginHorizontal: undefined,
      marginVertical: undefined,
      maxHeight: undefined,
      padding: undefined,
      paddingBottom: undefined,
      paddingRight: undefined,
      paddingLeft: undefined,
      paddingTop: undefined,
      paddingHorizontal: undefined,
      paddingVertical: undefined,
      width: undefined,
    });
  });

  it("should render a box with defined style", () => {
    const { getByTestId } = render(
      <Box styles={{ backgroundColor: "#FF0000", alignItems: "baseline" }}>
        {mockBox.children}
      </Box>,
    );

    expect(getByTestId("box").props.style[0][0]).toEqual({
      backgroundColor: "#FF0000",
      alignItems: "baseline",
    });
  });
});
