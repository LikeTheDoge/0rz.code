<script setup lang="ts">
import type { LangExprList, LangExpr } from '@0rz/lang';
import ExpressionRenderVue from '../ExpressionRender.vue';
import { computed } from 'vue';

const val = defineProps<{ expr: LangExpr }>()
const expr = computed(() => val.expr as LangExprList)
</script>


<template>
    
    <h3>list:</h3>
    <div v-for="input in expr.list">
        <ExpressionRenderVue :expr="input" />
    </div>

</template>

