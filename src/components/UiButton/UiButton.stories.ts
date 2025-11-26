import type { Meta, StoryObj } from '@storybook/vue3';
import UiButton from './UiButton.vue';

const meta = {
  title: 'Components/Button',
  component: UiButton,
    argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    type: {
      control: 'select',
      options: ['button', 'submit'],
    },
    isDisabled: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'primary',
    type: 'button',
    isDisabled: false,
  },
} satisfies Meta<typeof UiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: 'primary',
    type: 'button',
    isDisabled: false,
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: 
      "<div style='display: flex; justify-content: center; align-items: center; height: 200px;'><UiButton v-bind='args'>нажми на меня</UiButton>"
  })
};