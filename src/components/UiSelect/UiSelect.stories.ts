import { Meta, StoryObj } from '@storybook/vue3';

import UiSelect from './UiSelect.vue';

const meta = {
  title: 'Components/Select/Basic Select',
  component: UiSelect,
  argTypes: {
    modelValue: {
      control: 'select',
      options: ['Option 1', 'Option 2', 'Option 3'],
    },
    isDisabled: {
      control: 'boolean',
    },
    options: {
      control: 'object',
    },
  },
  args: {
    modelValue: '',
    isDisabled: false,
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
} satisfies Meta<typeof UiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicSelect: Story = {
  args: {
    modelValue: '',
    isDisabled: false,
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
  render: (args) => ({
    components: { UiSelect },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; justify-content: center; align-items: center; height: 200px;">
        <UiSelect v-bind="args" />
      </div>
    `
  })
};
