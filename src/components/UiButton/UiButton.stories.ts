import { Meta, StoryObj } from '@storybook/vue3';
import { UiButton } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof UiButton> = {
  component: UiButton,
  title: 'Components/Button/Single Centered',
  parameters: {
    backgrounds: {
      default: 'transparent',
      values: [
        { name: 'transparent', value: 'transparent' },
        { name: 'white', value: '#ffffff' },
      ],
    },
    layout: 'fullscreen', // без серого контейнера
  },
  args: {
    layout: 'primary',
    type: 'button',
    isDisabled: false
  },
};

export default meta;

export const SingleButton: StoryObj<typeof UiButton> = {
  render: (args) => ({
    components: { UiButton },
    setup: () => ({ args }),
    template: html`
      <div style="width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center;">
        <UiButton v-bind="args">Нажми на меня</UiButton>
      </div>
    `,
  }),
};
