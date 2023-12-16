import { TOOL_ITEMS } from "../constants";

import rough from "roughjs/bin/rough";

const gen = rough.generator();

export const createRoughElement = (id, x1, y1, x2, y2, { type }) => {
  const element = {
    id,
    x1,
    y1,
    x2,
    y2,
  };
  let options = {
    seed: id + 1, // id can't be zero
  };
  switch (type) {
    case TOOL_ITEMS.LINE:
      element.roughEle = gen.line(x1, y1, x2, y2, options);
      return element;
    case TOOL_ITEMS.RECTANGLE:
      element.roughEle = gen.rectangle(x1, y1, x2 - x1, y2 - y1, options);
      return element;
    default:
      throw new Error("Type not recognized");
  }
};
