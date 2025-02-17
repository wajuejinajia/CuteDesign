<template>
    <div class="vk-collapse">
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { ref, provide, watch } from 'vue';
import type { NameType } from './types';
import { CollapseContentKey } from './types';
import type { CollapseProps, CollapseEmits } from './types';

defineOptions({
    name: 'cjlCollapse'
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref<NameType[]>(props.modelValue)
watch(() => props.modelValue, () => {
    activeNames.value = props.modelValue
})
if (props.accordion && activeNames.value.length > 1) {
    console.warn('according mode should only have one active item')
}
const handleItemClick = (item: NameType) => {
    if (props.accordion) {
        activeNames.value = [activeNames.value[0] == item ? '' : item]
    } else {
        const index = activeNames.value.indexOf(item)
        if (index > -1) {
            // 存在，删除数组对应的一项
            activeNames.value.splice(index, 1)
        } else {
            // 不存在，插入对应的name
            activeNames.value.push(item)
        }
    }
    emits('update: modelValue', activeNames.value)
    emits('change', activeNames.value)
}
provide(CollapseContentKey, {
    activeNames,
    handleItemClick
})
</script>

<style scoped>

</style>