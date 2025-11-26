import { Meta, StoryObj } from '@storybook/vue3';
import { UiField } from '..';

const meta: Meta<typeof UiField> = {
  component: UiField,
  title: 'Components/Field/Basic Field',
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
};

export default meta;

export const BasicField: StoryObj<typeof UiField> = {
  render: () => ({
    components: { UiField },
    template: '<div style="width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center;"><UiField>Basic Field Content</UiField></div>',
  }),
};
