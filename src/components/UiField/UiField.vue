<template>
  <div class="field">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface IProps {
  // props for field, if any
}

interface IEmit {
  // emits, if any
}

const props = withDefaults(defineProps<IProps>(), {});

const emit = defineEmits<IEmit>();
</script>

<style>
.field {
  margin-bottom: var(--space-md);
  font-family: 'Luminari', 'Georgia', 'Times New Roman', serif;
  font-size: var(--font-size-base);
  border: 2px solid var(--color-border);
  padding: var(--space-sm) var(--space-md);
  background: var(--color-white);
  color: var(--color-black);
}
</style>
