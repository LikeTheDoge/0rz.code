<script setup lang="ts">
import type { LangValue } from '@0rz/lang';
import type { ValueJsonNumber } from '@0rz/lang-json';
import { computed } from 'vue';

const val = defineProps<{ value: LangValue }>()
const boolean = computed(() => val.value as ValueJsonNumber)

</script>

<template>
    <div>{{ boolean.value }}</div>
</template>

