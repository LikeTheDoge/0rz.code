<script setup lang="ts">
import type {  LangStatement } from '@0rz/lang';
defineProps<{ value: LangStatement }>()
</script>

<template>
    <div>unknown value of statement {{ value.key }}</div>
</template>