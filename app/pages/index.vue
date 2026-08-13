<template>
  <main class="flex min-h-screen items-center justify-center p-4 bg-muted">
    <UCard class="max-w-3xl w-full shadow-xl">
      <div class="flex flex-col sm:flex-row">
        <div class="flex items-center justify-center">
          <img
            src="/images/broethen.webp"
            alt="Bröthen"
            class="w-32 h-32 sm:w-48 sm:h-48 object-contain"
          >
        </div>
        <div class="flex-1 flex flex-col p-4 sm:px-8 space-y-4">
          <h1 class="text-2xl font-bold">
            Webseite im Aufbau
          </h1>
          <p class="text-muted">
            Unsere neue Webseite befindet sich derzeit in Entwicklung.
            Wir arbeiten daran, Ihnen bald ein modernes und übersichtliches
            Online-Angebot bereitzustellen.
          </p>
          <div class="flex items-center gap-2 text-sm text-muted">
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
