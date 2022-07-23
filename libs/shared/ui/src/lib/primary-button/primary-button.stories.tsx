import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PrimaryButton } from './primary-button';

export default {
  component: PrimaryButton,
  title: 'PrimaryButton',
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
