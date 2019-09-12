import { storiesOf } from "@storybook/react";
import * as React from "react";
import markdown from "./notes.md";
import RSIIndicator from "./rsiIndicator";

storiesOf("Indicators", module)
    .add("RSI", () => <RSIIndicator />, {
        notes: {
            markdown,
        },
        options: {
            showPanel: true,
        },
    });
