<template>
  <select
    :value="props.modelValue"
    :disabled="props.isDisabled"
    @change="handleChange"
    class="select"
  >
    <option value="" disabled hidden>Выберите опцию</option>
    <option
      v-for="option in props.options"
      :key="option"
      :value="option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
  isDisabled?: boolean;
  options: string[];
}

const props = withDefaults(defineProps<IProps>(), {
  isDisabled: false,
  options: () => [],
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
};
</script>

<style>
.select {
  padding: var(--space-sm) var(--space-md);
  font-size: var(--font-size-base);
  font-family: 'Luminari', 'Georgia', 'Times New Roman', serif;
  background: var(--color-white);
  border: 2px solid var(--color-border);
  outline: none;
  cursor: pointer;
  min-width: 200px;
  box-sizing: border-box;
}

.select:focus {
  border-color: var(--color-border-focus);
  outline: 2px solid var(--color-border-focus);
  outline-offset: 1px;
}

.select:disabled {
  background: var(--color-gray-100);
  opacity: 0.6;
  cursor: not-allowed;
}
</style>