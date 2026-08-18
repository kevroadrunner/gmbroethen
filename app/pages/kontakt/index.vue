<script setup lang="ts">
import meta from '~/data/meta.json'

const subject = ref('Anfrage an den Bürgermeister')
const message = ref('')

const mailto = computed(() => {
  const params = new URLSearchParams({
    subject: subject.value,
    body: message.value
  })
  return `mailto:${meta.mayor.mail}?${params.toString()}`
})
</script>

<template>
  <main>
    <PageHero
      eyebrow="Direkter Kontakt"
      title="Kontakt"
      description="Frage, Hinweis oder Beschwerde?
        Schreiben Sie direkt an den Bürgermeister."
    />
    <section class="mx-auto max-w-5xl px-6 pb-20 lg:px-8 lg:pb-28">
      <div class="grid gap-5 lg:grid-cols-[1fr_1.5fr]">
        <UCard>
          <template #header>
            <div class="flex items-center gap-3">
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
          <p class="mt-2 text-muted">
            {{ meta.mayor.name }}
          </p>
          <p class="mt-1 text-sm text-muted">
            Bürgermeister der Gemeinde Bröthen
          </p>
          <template #footer>
            <p class="text-sm text-muted">
              {{ meta.mayor.mail }}
            </p>
          </template>
        </UCard>
        <UCard>
          <template #header>
            <div class="flex gap-3">
              <Icon
                name="lucide:mail"
                class="size-7 text-primary"
              />
              <div>
                <h2 class="text-xl font-semibold">
                  Nachricht vorbereiten
                </h2>
                <p class="mt-1 text-sm text-muted">
                  Die Nachricht wird anschließend in Ihrem E-Mail-Programm geöffnet.
                </p>
              </div>
            </div>
          </template>
          <div class="space-y-5">
            <UFormField
              label="Anliegen"
            >
              <USelect
                v-model="subject"
                :items="[
                  'Allgemeine Anfrage',
                  'Hinweis',
                  'Beschwerde',
                  'Sonstiges'
                ]"
                class="w-full"
              />
            </UFormField>
            <UFormField label="Nachricht">
              <UTextarea
                v-model="message"
                :rows="7"
                placeholder="Ihre Nachricht ..."
                class="w-full"
              />
            </UFormField>
          </div>
          <template #footer>
            <UButton
              :to="mailto"
              icon="lucide:mail"
            >
              E-Mail vorbereiten
            </UButton>
          </template>
        </UCard>
      </div>
    </section>
  </main>
</template>
