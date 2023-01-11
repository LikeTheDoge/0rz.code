<script setup lang="ts">
import type { LangValue } from '@0rz/lang';
defineProps<{ value: LangValue }>()
</script>

<template>
    <div>unknown value of type {{ value.type.id  }}</div>
</template>