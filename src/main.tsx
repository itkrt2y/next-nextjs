import { render } from "preact";
import { App } from "~/app";

const el = document.getElementById("app");
if (el) {
  render(<App />, el);
} else {
  console.error("#app does not exist");
}
