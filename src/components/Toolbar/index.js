import React, { useState } from "react";
import classes from "./index.module.css";

import cx from "classnames";
import { FaSlash } from "react-icons/fa";
import { LuRectangleHorizontal } from "react-icons/lu";
import { TOOL_ITEMS } from "../../constants";

const Toolbar = () => {
  const [activeToolItem, setActiveToolItem] = useState(TOOL_ITEMS.LINE);

  return (
    <div className={classes.container}>
      <div
        className={cx(classes.toolItem, {
          [classes.active]: activeToolItem === TOOL_ITEMS.LINE,
        })}
        onClick={() => setActiveToolItem(TOOL_ITEMS.LINE)}
      >
        <FaSlash />
      </div>
      <div
        className={cx(classes.toolItem, {
          [classes.active]: activeToolItem === TOOL_ITEMS.RECTANGLE,
        })}
        onClick={() => setActiveToolItem(TOOL_ITEMS.RECTANGLE)}
      >
        <LuRectangleHorizontal />
      </div>
    </div>
  );
};

export default Toolbar;
