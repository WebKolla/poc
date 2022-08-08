import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TestStory } from './test-story';

export default {
  component: TestStory,
  title: 'TestStory',
} as ComponentMeta<typeof TestStory>;

const Template: ComponentStory<typeof TestStory> = (args) => (
  <TestStory {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
