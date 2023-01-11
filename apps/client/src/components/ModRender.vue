
<script setup lang="ts">
import type { LangModule } from '@0rz/lang'
import ValueRender from './ValueRender.vue'
import TypeRender from './TypeRender.vue'
import { computed } from 'vue';

const props = defineProps<{ mod: LangModule }>()

const types = computed(() => props.mod.types)

const values = computed(() => {
    const scope = props.mod.scope
    return Array.from(scope.values.entries())
})

</script>

<template>
    <div class="mod">
        <h2>types</h2>
        <div class="types">
            <TypeRender :types="types" />
        </div>

        <h2>values</h2>
        <div class="values">
            <div class="value" v-for="(value, i) in values" :key="i">
                <div class="value-name">{{ value[0] }}</div>
                <ValueRender :value="value[1]" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.mod {
    width: 100%;
}
.types{
    margin: 0 -4px;
}
.values {
    width: 100%;
    overflow: hidden;
    margin: 0 -4px;

    .value {
        float: left;
        margin: 4px;
        border: 1px solid salmon;
        border-radius: 4px;

        .value-name{
            line-height: 20px;
            padding: 6px 6px;
            font-weight: bold;
            background-color: rgba(250, 124, 110,0.3);
        }

    }
}
</style>
