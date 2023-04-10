import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from 'components/button/Button';
import { Text } from 'components/typograph/Text';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typograph',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Label = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Label.args = {
  variant: 'body',
  label: 'Sample Text',
};


