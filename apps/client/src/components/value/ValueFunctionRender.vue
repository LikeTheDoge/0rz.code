<script setup lang="ts">
import type { LangValue, LangNativeFunction } from '@0rz/lang';
import { computed } from 'vue';

const val = defineProps<{ value: LangValue }>()
const func = computed(() => val.value as LangNativeFunction)

const argus = computed(() => {
    return func.value.argus.map(([name, types]) => {
        return [name, Array.from(types.values()).map(v => v.name).join(' | ')] as [string, string]
    })
})

const result = computed(()=>{
    return Array.from(func.value.result).map(v => v.name).join(' | ')
})

</script>

<template>
    <div>
        <h2>argus</h2>
        <table>
            <tbody>
                <tr v-for="argu in argus" :key="argu[0]">
                    <td style="background:#ccc">{{ argu[0] }}</td>
                    <td>{{ argu[1] }}</td>
                </tr>
            </tbody>
        </table>
        <h2>result : {{ result }}</h2>
    </div>
</template>
