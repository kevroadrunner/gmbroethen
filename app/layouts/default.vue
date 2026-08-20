<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main class="flex-1 bg-muted">
      <UAlert
        icon="lucide:construction"
        color="warning"
        variant="soft"
        title="Diese Website befindet sich derzeit noch im Aufbau."
        description="Inhalte und Funktionen werden nach und nach ergänzt."
        class="mx-auto my-4 max-w-md"
      />
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
