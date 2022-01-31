import React from "react";
import { Page } from "./Page";

export default {
  title: "Example/Page",
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const First = Template.bind({});
First.args = {
  name: "katerina",
};

export const Second = Template.bind({});
Second.args = {
  name: "anastasis",
};
