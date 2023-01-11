<script setup lang="ts">
import type { LangValue, LangNativeFunction } from '@0rz/lang';
import TypeRender from '../TypeRender.vue';
import { computed } from 'vue';

const val = defineProps<{ value: LangValue }>()
const func = computed(() => val.value as LangNativeFunction)

const argus = computed(() => {
    return func.value.argus
})

const result = computed(()=>{
    return func.value.result
})

</script>

<template>
    <div class="value-function">
        <table>
            <tbody>
                <tr v-for="argu in argus" :key="argu[0]">
                    <td class="th">{{ argu[0] }}</td>
                    <td><TypeRender :types="argu[1]"/></td>
                </tr>
                <tr>
                    <td class="th return">return</td>
                    <td> <TypeRender :types="result"/></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<style lang="scss" scoped>
.value-function{
    background-color: beige;
}

.th{
    text-align: center;
    font-weight: bold;
    padding: 0 4px;
}

</style>