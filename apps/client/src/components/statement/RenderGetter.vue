<script setup lang="ts">
import type { LangExpr, LangGetter } from '@0rz/lang';
import { computed } from 'vue';

const val = defineProps<{ expr: LangExpr }>()
const expr = computed(() => val.expr as LangGetter)
</script>


<template>
    <h3>get:{{ expr.identifier }}</h3>
</template>
