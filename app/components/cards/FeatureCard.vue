<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
  to: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="group flex"
  >
    <UCard
      class="flex flex-1 flex-col transition-transform group-hover:scale-102"
      :ui="{
        body: 'flex h-full flex-col justify-between space-y-2'
      }"
    >
      <Icon
        :name="icon"
        class="size-9 text-primary"
      />
      <div>
        <h2 class="text-2xl font-semibold tracking-tight">
          {{ title }}
        </h2>
        <p class="mt-2 max-w-sm text-sm leading-6 text-muted">
          {{ description }}
        </p>
        <div class="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
          Mehr erfahren
        </div>
      </div>
    </UCard>
  </NuxtLink>
</template>
