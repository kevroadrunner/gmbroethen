<script setup lang="ts">
export type FileType = 'PDF-Dokument' | 'PNG-Bild'

defineProps<{
  file: string
  name: string
  type: FileType
}>()

const iconMap: Record<FileType, string> = {
  'PDF-Dokument': 'lucide:file-text',
  'PNG-Bild': 'lucide:file-image'
}
</script>

<template>
  <a
    :href="file"
    target="_blank"
    class="flex items-center gap-4 rounded-xl border border-default p-4 transition-transform hover:scale-102"
  >
    <CustomAvatar size="size-10">
      <Icon
        :name="iconMap[type]"
        class="size-5"
      />
    </CustomAvatar>
    <div class="min-w-0">
      <p class="font-medium">
        {{ name }}
      </p>
      <p class="text-sm text-muted">
        {{ type }}
      </p>
    </div>
    <Icon
      name="lucide:download"
      class="ml-auto size-4 shrink-0 text-muted"
    />
  </a>
</template>
