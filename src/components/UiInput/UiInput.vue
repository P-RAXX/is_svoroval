<template>
  <input
    :type="props.type"
    :disabled="props.isDisabled"
    :placeholder="props.placeholder"
    :value="props.modelValue"
    @input="handleInput"
    class="input"
  />
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
  isDisabled?: boolean;
  placeholder?: string;
  type?: 'text' | 'number';
}

const props = withDefaults(defineProps<IProps>(), {
  isDisabled: false,
  placeholder: '',
  type: 'text'
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<style>
.input {
  padding: var(--space-sm) var(--space-md);
  font-size: var(--font-size-base);
  font-family: 'Luminari', 'Georgia', 'Times New Roman', serif;
  background: var(--color-white);
  border: 2px solid var(--color-border);
  outline: none;
  box-sizing: border-box;
}

.input:focus {
  border-color: var(--color-border-focus);
  outline: 2px solid var(--color-border-focus);
  outline-offset: 1px;
}

.input:disabled {
  background: var(--color-gray-100);
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
