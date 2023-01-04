<script setup lang="ts">
import type { LangValue } from '@0rz/lang';
import type { ValueJsonBoolean } from '@0rz/lang-json';
import { computed } from 'vue';

const val = defineProps<{ value: LangValue }>()
const boolean = computed(() => val.value as ValueJsonBoolean)

</script>

<template>
    <div>{{ boolean.value ? 'true' : 'false' }}</div>
</template>

