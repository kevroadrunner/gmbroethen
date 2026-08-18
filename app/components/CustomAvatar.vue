<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: string
  }>(),
  {
    size: 'size-20'
  }
)
</script>

<template>
  <div
    :class="[
      'flex shrink-0 flex-col items-center justify-center rounded-xl bg-primary/10 text-primary',
      size
    ]"
  >
    <slot />
  </div>
</template>
