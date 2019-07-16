import React from "react";
import { storiesOf } from "@storybook/react";

import Slider from "./Slider";

storiesOf("Slider", module).add("initial", () => <Slider />);

//   .add("default", () => <Task task={task} {...actions} />)
//   .add("pinned", () => (
//     <Task task={{ ...task, state: "TASK_PINNED" }} {...actions} />
//   ))
//   .add("archived", () => (
//     <Task task={{ ...task, state: "TASK_ARCHIVED" }} {...actions} />
//   ));
