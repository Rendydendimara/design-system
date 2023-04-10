import React from 'react';
import { WebInput } from 'components/WebInput/WebInput';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// import { Input } from '@material-ui/core';
// import {
//   argTypes,
//   parameters,
// } from '@vtmn/showcase-core/csf/components/forms/text-input.csf';

const argTypes = {
  identifier: {
    type: { name: 'string', required: true },
    description: 'The id of the input.',
    defaultValue: 'vtmn-input',
    control: { type: 'text' },
  },
  labelText: {
    type: { name: 'string', required: false },
    description: 'The label of the input.',
    defaultValue: 'Label',
    control: { type: 'text' },
  },
  placeholder: {
    type: { name: 'string', required: false },
    description: 'The placeholder of the input.',
    defaultValue: 'Placeholder Text',
    control: { type: 'text' },
  },
  helperText: {
    type: { name: 'string', required: false },
    description: 'The helper text message of the input.',
    defaultValue: 'Helper text goes here',
    control: { type: 'text' },
  },
  // icon: {
  //   type: { name: 'string', required: false },
  //   description: 'The icon of text input.',
  //   defaultValue: 'home-fill',
  //   control: {
  //     type: 'select',
  //     options: ['', ...Object.keys(vitamixIconsList)],
  //   },
  // },
  multiline: {
    type: { name: 'boolean', required: false },
    description: 'If the component is a textarea or an input.',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  disabled: {
    type: { name: 'boolean', required: false },
    description: 'The disabled state of the input.',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  valid: {
    type: { name: 'boolean', required: false },
    description: 'The valid state of the input.',
    defaultValue: false,
    control: { type: 'boolean' },
  },
  error: {
    type: { name: 'boolean', required: false },
    description: 'The error state of the input.',
    defaultValue: false,
    control: { type: 'boolean' },
  },
};

export default {
  title: 'WebInput',
  component: WebInput,
  argTypes: {
    ...argTypes,
    // onIconClick: {
    //   type: { name: 'string', required: false },
    //   description: 'Called when icon is clicked',
    //   control: {
    //     type: 'function',
    //   },
    // },
  },
  // parameters,
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => <WebInput {...args} />;
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  onIconClick: () => action('icon clicked'),
};
