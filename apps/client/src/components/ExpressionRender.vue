<script setup lang="ts">
import { LangValue, LangStatement, type LangExpr } from '@0rz/lang';
import { fetch } from './statement';
import ValueRender from './ValueRender.vue'
const props = defineProps<{ expr: LangExpr }>()

</script>

<template>
    <component v-if="(props.expr instanceof LangStatement)" :is="fetch(props.expr)" :value="props.expr" />
    <ValueRender v-if="(props.expr instanceof LangValue)" :value="props.expr" />
</template>
