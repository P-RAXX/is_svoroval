import { Meta, StoryObj } from '@storybook/vue3';
import { UiInput } from '..';

const meta: Meta<typeof UiInput> = {
  component: UiInput,
  title: 'Components/Input/Basic Input',
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'gray', value: '#f5f5f5' },
      ],
    },
    layout: 'fullscreen',
  },
  args: {
    type: 'text',
    isDisabled: false,
    placeholder: 'Enter text...',
    modelValue: '',
  },
};

export default meta;

export const BasicInput: StoryObj<typeof UiInput> = {
  render: (args) => ({
    components: { UiInput },
    setup: () => ({ args }),
    template: '<div style="width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center;"><UiInput v-bind="args" /></div>',
  }),
};
