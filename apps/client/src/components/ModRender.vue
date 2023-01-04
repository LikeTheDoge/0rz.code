
<script setup lang="ts">
import type { LangModule } from '@0rz/lang'
import ValueRender from './ValueRender.vue'
import { computed } from 'vue';

const props = defineProps<{ mod: LangModule }>()

const types = computed(() => props.mod.types)

const values = computed(() => {
    const scope = props.mod.scope
    const values = Array.from(scope.values.entries())
    return values
})

</script>

<template>
    <div>
        <div class="types">
            <h1>types</h1>
            <div v-for="(type, i) in types" :key="i">{{ type.name }}</div>
        </div>

        <div class="values">
            <h1>values</h1>
            <div v-for="(value, i) in values" :key="i">
                <h1>{{ value[0] }}:</h1>
                <ValueRender :value="value[1]" />
            </div>
        </div>
    </div>
</template>
