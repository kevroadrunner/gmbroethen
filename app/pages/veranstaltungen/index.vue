<script setup lang="ts">
import events from '~/data/events.json'
import { formatDate, formatDateToDay, formatDateToMonth, sortDates } from '~/utils'

const sortedEvents = sortDates(events)
</script>

<template>
  <main>
    <PageHero
      eyebrow="Termine"
      title="Veranstaltungen"
      description="Was ist los in Bröthen?"
    />
    <PageContent variant="centered">
      <div class="space-y-5">
        <UCard
          v-for="event in sortedEvents"
          :key="event.id"
          class="flex flex-1 transition-transform duration-200 hover:scale-102"
          :ui="{
            body: 'flex w-full flex-col gap-6 sm:flex-row sm:items-center'
          }"
        >
          <CustomAvatar>
            <span class="text-2xl font-semibold leading-none">
              {{ formatDateToDay(event.date) }}
            </span>
            <span class="mt-1 text-xs font-medium tracking-wide">
              {{ formatDateToMonth(event.date) }}
            </span>
          </CustomAvatar>
          <div class="min-w-0 flex-1">
            <p class="text-sm text-muted">
              {{ formatDate(event.date) }} · {{ event.time }} Uhr
            </p>
            <h2 class="mt-1 text-2xl font-semibold tracking-tight">
              {{ event.title }}
            </h2>
            <p class="mt-2 leading-6 text-muted">
              {{ event.description }}
            </p>
            <div class="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
              <Icon
                name="lucide:map-pin"
                class="size-4"
              />
              {{ event.location }}
            </div>
          </div>
        </UCard>
      </div>
    </PageContent>
  </main>
</template>
