<template>
  <button
    :type="props.type"
    :disabled="props.isDisabled"
    :class="[
      'button',
      `button--${props.variant}`,
      { 'pressed': isPressed }
    ]"
    @mousedown="handlePress"
    @mouseup="handleRelease"
    @mouseleave="handleRelease"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface IProps {
  type?: 'button' | 'submit';
  isDisabled?: boolean;
  variant?: 'primary' | 'secondary';
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'button',
  isDisabled: false,
  variant: 'primary',
});

const isPressed = ref(false);

const handlePress = () => {
  if (!props.isDisabled) isPressed.value = true;
};

const handleRelease = () => {
  isPressed.value = false;
};
</script>

<style>
.button {
  padding: var(--space-md) var(--space-lg);
  font-size: var(--font-size-lg);
  font-family: 'Luminari', 'Georgia', 'Times New Roman', serif;
  font-weight: normal;
  border: 2px solid;
  cursor: pointer;
  transition: none;
  min-width: 120px;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.5px;
  text-transform: none;
}

.button:focus {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Primary variant - классический фиолетовый */
.button--primary {
  background: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary-active);
}

.button--primary:hover:not(:disabled) {
  background: var(--color-primary-hover);
  border-color: var(--color-primary-active);
}

.button--primary:active:not(:disabled) {
  background: var(--color-primary-active);
}

/* Secondary variant - классический синий */
.button--secondary {
  background: var(--color-secondary);
  color: var(--color-white);
  border-color: var(--color-secondary-active);
}

.button--secondary:hover:not(:disabled) {
  background: var(--color-secondary-hover);
  border-color: var(--color-secondary-active);
}

.button--secondary:active:not(:disabled) {
  background: var(--color-secondary-active);
}

/* Outline variants - классические контурные */
.button--outline-primary {
  background: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.button--outline-primary:hover:not(:disabled) {
  background: var(--color-primary);
  color: var(--color-white);
}

.button--outline-secondary {
  background: transparent;
  color: var(--color-secondary);
  border-color: var(--color-secondary);
}

.button--outline-secondary:hover:not(:disabled) {
  background: var(--color-secondary);
  color: var(--color-white);
}
</style>