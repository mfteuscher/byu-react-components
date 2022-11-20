import { ComponentMeta, ComponentStory } from '@storybook/react';
import {AccordianItem, AccordianList} from '../src/components/Accordian/Accordian';
import React from 'react';

export default {
	component: AccordianList,
	title: 'Accordian',
} as ComponentMeta<typeof AccordianList>;

const Template: ComponentStory<typeof AccordianList> = args => <AccordianList {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: "Accordian Example",
	children: [
		<AccordianItem title="Item 1">Only think about one thing at a time. Don't get greedy. Here's something that's fun. Let's build some happy little clouds up here. I'm sort of a softy, I couldn't shoot Bambi except with a camera. All you need to paint is a few tools, a little instruction, and a vision in your mind. Be brave.</AccordianItem>,
		<AccordianItem title="Item 2">There we go. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. We don't make mistakes we just have happy little accidents. Let all these little things happen. Don't fight them. Learn to use them. Think about a cloud. Just float around and be there.</AccordianItem>,
		<AccordianItem title="Item 3">Every day I learn. If you've been in Alaska less than a year you're a Cheechako. You can create anything that makes you happy. Isn't that fantastic that you can make whole mountains in minutes? But we're not there yet, so we don't need to worry about it.</AccordianItem>,
		<AccordianItem title="Item 4">We'll paint one happy little tree right here. All you need is a dream in your heart, and an almighty knife. This is your world. Play with the angles. We'll play with clouds today. Isn't it fantastic that you can change your mind and create all these happy things?</AccordianItem>,
	]
}
