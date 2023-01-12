<script setup lang="ts">
import type { LangType, LangTypes } from '@0rz/lang';
import IdRender from './IdRender.vue';
import { computed } from 'vue'

const props = defineProps<{ type?: LangType, types?: LangTypes }>()
const type = computed(() => props.type)
const types = computed(() => props.types ? Array.from(props.types) : null)
</script>

<template>
    <IdRender v-if="type" :id="type.id"></IdRender>
    <IdRender v-if="types" v-for="v in types" :id="v.id"></IdRender>
</template>