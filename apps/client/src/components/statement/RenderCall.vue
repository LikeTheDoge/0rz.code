<script setup lang="ts">
import type { LangCall, LangExpr } from '@0rz/lang';
import ExpressionRenderVue from '../ExpressionRender.vue';
import { computed } from 'vue';

const val = defineProps<{ expr: LangExpr }>()
const expr = computed(() => val.expr as LangCall)
</script>


<template>
    <h3>function:</h3>
    <div>
        <ExpressionRenderVue :expr="expr.fn" />
    </div>

    <h3>argus:</h3>
    <div v-for="input in expr.inputs">
        <ExpressionRenderVue :expr="input" />
    </div>

</template>

