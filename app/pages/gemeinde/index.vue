<script setup lang="ts">
import meta from '~/data/meta.json'
import downloads from '~/data/downloads.json'
import type { FileType } from '~/components/FileDownload.vue'
</script>

<template>
  <main>
    <PageHero
      eyebrow="Unsere Gemeinde"
      title="Gemeinde Bröthen"
      description="Wissenswertes über Bröthen, unsere Gemeinde und
        die Menschen, die sich für unser Dorf engagieren."
    />
    <PageContent>
      <div class="grid gap-5 lg:grid-cols-3">
        <UCard
          class="lg:col-span-2"
          :ui="{
            body: 'space-y-6'
          }"
        >
          <div class="overflow-hidden rounded-xl">
            <img
              src="https://picsum.photos/1200/650"
              alt="Bröthen"
              class="aspect-16/8 w-full object-cover"
            >
          </div>
          <div>
            <div class="mt-5 space-y-4 leading-7 text-muted">
              <p>
                Bröthen ist eine kleine Gemeinde mit einer lebendigen
                Dorfgemeinschaft und einem vielfältigen Vereinsleben.
              </p>
              <p>
                TODO: Hier können Informationen zur Geschichte, zur Lage und
                zur Entwicklung der Gemeinde stehen...
              </p>
              <p>
                TODO: Auch aktuelle Projekte und besondere Themen der Gemeinde
                können an dieser Stelle vorgestellt werden...
              </p>
            </div>
          </div>
          <template #footer>
            <div class="flex gap-3">
              <UButton
                to="/aktuelles"
                variant="soft"
                icon="lucide:newspaper"
              >
                Aktuelles anzeigen
              </UButton>
              <UButton
                to="/galerie"
                variant="soft"
                icon="lucide:images"
              >
                Galerie entdecken
              </UButton>
            </div>
          </template>
        </UCard>
        <UCard>
          <template #header>
            <div class="flex gap-3">
              <Icon
                name="lucide:user-round"
                class="size-7 text-primary"
              />
              <div>
                <h2 class="text-xl font-semibold">
                  Bürgermeister
                </h2>
              </div>
            </div>
          </template>
          <div class="space-y-5">
            <img
              src="https://picsum.photos/400/400"
              alt="Bürgermeister"
              class="aspect-square w-full rounded-xl object-cover"
            >
            <div>
              <h3 class="text-xl font-semibold">
                {{ meta.mayor.name }}
              </h3>
              <p class="mt-1 text-sm text-muted">
                Bürgermeister der Gemeinde Bröthen
              </p>
            </div>
          </div>
          <template #footer>
            <UButton
              to="/kontakt"
              variant="soft"
              icon="lucide:message-circle"
            >
              Kontakt aufnehmen
            </UButton>
          </template>
        </UCard>
        <UCard>
          <template #header>
            <div class="flex gap-3">
              <Icon
                name="lucide:contact"
                class="size-7 text-primary"
              />
              <h2 class="text-xl font-semibold">
                Ansprechpartner
              </h2>
            </div>
          </template>
          <dl class="space-y-5">
            <div>
              <dt class="text-sm text-muted">
                Bürgermeister
              </dt>
              <dd class="mt-1 font-medium">
                {{ meta.mayor.name }}
              </dd>
            </div>
            <div>
              <dt class="text-sm text-muted">
                Gemeindeverwaltung
              </dt>
              <dd class="mt-1 font-medium">
                {{ meta.mayor.address }}
              </dd>
            </div>
            <div>
              <dt class="text-sm text-muted">
                Telefon
              </dt>
              <dd class="mt-1 font-medium">
                {{ meta.mayor.phone }}
              </dd>
            </div>
            <div>
              <dt class="text-sm text-muted">
                E-Mail
              </dt>
              <dd class="mt-1 font-medium">
                <ULink :href="`mailto:${meta.mayor.mail}`">
                  {{ meta.mayor.mail }}
                </ULink>
              </dd>
            </div>
          </dl>
        </UCard>
        <UCard class="lg:col-span-2">
          <template #header>
            <div class="flex gap-3">
              <Icon
                name="lucide:file-text"
                class="size-7 text-primary"
              />
              <h2 class="text-xl font-semibold">
                Downloads
              </h2>
            </div>
          </template>
          <div class="grid gap-3 sm:grid-cols-2">
            <FileDownload
              v-for="download in downloads"
              :key="download.file"
              :file="download.file"
              :name="download.name"
              :type="download.type as FileType"
            />
          </div>
        </UCard>
      </div>
    </PageContent>
  </main>
</template>
