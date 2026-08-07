<template>
  <main class="min-h-screen flex items-center justify-center p-6">
    <UCard class="max-w-3xl w-full overflow-hidden">
      <div class="flex min-h-64">
        <div class="flex items-center justify-center p-8 bg-muted/30">
          <img
            src="/images/broethen.webp"
            alt="Bröthen"
            class="w-40 h-40 object-contain"
          >
        </div>

        <div class="flex-1 flex flex-col justify-center p-8">
          <h1 class="text-2xl font-bold mb-4">Webseite im Aufbau</h1>
          <p class="text-muted">
            Unsere neue Webseite befindet sich derzeit in Entwicklung.
            Wir arbeiten daran, Ihnen bald ein modernes und übersichtliches
            Online-Angebot bereitzustellen.
          </p>
          <div class="flex items-center gap-2 mt-6 text-sm text-muted">
            <UIcon
              name="i-lucide-construction"
              class="size-4"
            />
            <span>Vielen Dank für Ihr Verständnis.</span>
          </div>
        </div>
      </div>
    </UCard>
  </main>
</template>
