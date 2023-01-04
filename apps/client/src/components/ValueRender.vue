<script setup lang="ts">
import type { LangValue } from '@0rz/lang';
import { fetch } from './value';
const props = defineProps<{ value: LangValue }>()
</script>

<template>
    <component :is="fetch(props.value.type)" :value="props.value"></component>
</template>
