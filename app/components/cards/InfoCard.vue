<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  items: {
    title: string
    date?: string
  }[]
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
      <div class="flex gap-2 items-center">
        <Icon
          :name="icon"
          class="size-5 text-primary"
        />
        <h2 class="font-semibold">
          {{ title }}
        </h2>
      </div>
      <div class="mt-6 divide-y divide-muted">
        <div
          v-for="item in items"
          :key="item.title"
          class="py-4 first:pt-0 last:pb-0"
        >
          <p class="text-sm font-medium">
            {{ item.title }}
          </p>
          <p
            v-if="item.date"
            class="mt-1 text-xs text-muted"
          >
            {{ item.date }}
          </p>
        </div>
      </div>
    </UCard>
  </NuxtLink>
</template>
