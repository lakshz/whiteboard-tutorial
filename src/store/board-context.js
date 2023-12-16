import { createContext } from "react";

const boardContext = createContext({
  activeToolItem: "",
  elements: [],
  boardMouseDownHandler: () => {},
  handleToolItemClick: () => {},
});

export default boardContext;
