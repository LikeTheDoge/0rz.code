<script setup lang="ts">
import type { LangExpr, LangReturn } from '@0rz/lang';
import ExpressionRenderVue from '../ExpressionRender.vue';
import { computed } from 'vue';

const val = defineProps<{ expr: LangExpr }>()
const expr = computed(() => val.expr as LangReturn)
</script>


<template>
    <h3>return</h3>
    <div><ExpressionRenderVue :expr="expr.target" /></div>
</template>
