<script setup lang="ts">
import type { LangIdentifier } from '@0rz/lang';
import { computed, defineProps } from 'vue'

const props = defineProps<{ id: LangIdentifier }>()
const id = computed(() => props.id)
</script>

<template>
    <span :data-kind="id.kind" :title="`[${id.kind}] ${id.namespace.key}/${id.name}`" class="id-render">
        {{ id.name }}
    </span>
</template>


<style scoped lang="scss">
span.id-render[data-kind="type"] {
    background-color: aquamarine;
    line-height: 28px;
    font-size: 14px;
    padding: 0 12px;
    display: inline-block;
    margin: 2px 4px;
    font-weight: 400;
}
</style>