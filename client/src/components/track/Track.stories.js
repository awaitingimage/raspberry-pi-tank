import React from "react";
import { storiesOf } from "@storybook/react";

import Track from "./Track";

storiesOf("Track", module).add("initial", () => <Track />);

//   .add("default", () => <Task task={task} {...actions} />)
//   .add("pinned", () => (
//     <Task task={{ ...task, state: "TASK_PINNED" }} {...actions} />
//   ))
//   .add("archived", () => (
//     <Task task={{ ...task, state: "TASK_ARCHIVED" }} {...actions} />
//   ));
