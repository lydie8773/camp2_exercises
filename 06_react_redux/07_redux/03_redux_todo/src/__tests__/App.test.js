import App from "../components/App";
import renderer from "react-test-renderer";

test("App displays well", () => {
  const app =renderer.create(<App />);
  expect(app).toMatchSnapshot();
})