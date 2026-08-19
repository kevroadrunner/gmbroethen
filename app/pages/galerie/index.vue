<script setup lang="ts">
import gallery from '~/data/gallery.json'
</script>

<template>
  <main>
    <PageHero
      eyebrow="Eindrücke"
      title="Galerie"
      description="Bilder aus dem Dorfleben."
    />
    <PageContent>
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-5">
        <figure
          v-for="image in gallery"
          :key="image.id"
          class="group mb-5 break-inside-avoid overflow-hidden rounded-xl"
        >
          <img
            :src="image.image"
            :alt="image.title"
            class="block w-full transition-transform duration-200 group-hover:scale-102"
          >
          <figcaption class="px-5 py-4 text-sm font-medium bg-primary/10">
            {{ image.title }}
          </figcaption>
        </figure>
      </div>
    </PageContent>
  </main>
</template>
