<template>
  <button
    :type="props.type"
    :disabled="props.isDisabled"
    :class="[
      $style.button,
      $style[`button--${props.layout}`],
      { [$style.pressed]: isPressed }
    ]"
    @mousedown="handlePress"
    @mouseup="handleRelease"
    @mouseleave="handleRelease"
  >
    <span :class="$style.text">
      <slot></slot>
    </span>
    <div :class="$style.border"></div>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface IProps {
  layout?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  type: 'button',
  isDisabled: false,
});

const isPressed = ref(false);

const handlePress = () => {
  if (!props.isDisabled) isPressed.value = true;
};

const handleRelease = () => {
  isPressed.value = false;
};
</script>

<style module lang="scss">
.button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 300px;
  height: 50px;
  padding: 0 24px;
  font-family: 'Minecraft', monospace;
  font-size: 20px;
  font-weight: normal;
  color: #fff;
  text-shadow: 2px 2px 0 #3f3f3f;

  background: #6b6b6b;
  border: none;
  cursor: pointer;
  user-select: none;
  image-rendering: pixelated;

  transform: translateY(-4px);
  transition: transform 0.07s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: translateY(-2px);
  }
}




.pressed:not(:disabled) {
  transform: translateY(-1px);
}

.text {
  position: relative;
  z-index: 2;
}

.border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;

  border: 3px solid #000;
  border-top-color: #ffffff;
  border-left-color: #ffffff;
  border-bottom-color: #3a3a3a;
  border-right-color: #3a3a3a;
}
</style>
