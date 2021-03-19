import { FunctionComponent } from "preact";

export const H1: FunctionComponent = ({ children }) => (
  <h1 class="text-2xl font-semibold mb-6">{children}</h1>
);

export const H2: FunctionComponent = ({ children }) => (
  <h2 class="text-xl font-medium mb-4">{children}</h2>
);
