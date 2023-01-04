<template>
    <div class="main-page">
        <ModRender v-for="(mod, i) in mods" :key="i" :mod="mod"></ModRender>
    </div>
</template>

<script lang="ts" setup>
import { mods } from '@/data/mods'
import ModRender from '@/components/ModRender.vue'
</script>

<style lang="scss" scoped>
.main-page{
    max-width: 1264px;
    margin: 0 auto;
    padding: 0 32px;
}
</style>