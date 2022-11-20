import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Button from "../src/components/Button/Button";

export default {
	component: Button,
	title: "Button",
	argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	children: "Primary Button",
	variant: "primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
	children: "Secondary Button",
	variant: "secondary",
};

export const White = Template.bind({});
White.args = {
	children: "White Button",
	variant: "white",
};
