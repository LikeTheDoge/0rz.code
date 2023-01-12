<script setup lang="ts">
import type { LangExpr, LangTypeMatch } from '@0rz/lang';
import ExpressionRenderVue from '../ExpressionRender.vue';
import { computed } from 'vue';

const val = defineProps<{ expr: LangExpr }>()
const expr = computed(() => val.expr as LangTypeMatch)
</script>

<template>
    <div v-for="cas in expr.list">
        <div>{{ cas[0].id }}</div>
        <div>
            <ExpressionRenderVue :expr="cas[1]" />
        </div>
    </div>
    <div>
        <div>else</div>
        <div>
            <ExpressionRenderVue :expr="expr.else" />
        </div>
    </div>
</template>
