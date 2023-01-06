<script setup lang="ts">
import type { LangExpr, LangSetter } from '@0rz/lang';
import ExpressionRenderVue from '../ExpressionRender.vue';
import { computed } from 'vue';

const val = defineProps<{ expr: LangExpr }>()
const expr = computed(() => val.expr as LangSetter)
</script>


<template>
    <h3>set:{{ expr.identifier }}</h3>
    <div><ExpressionRenderVue :expr="expr.value" /></div>
</template>
