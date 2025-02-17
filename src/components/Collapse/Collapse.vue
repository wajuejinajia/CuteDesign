<template>
    <div class="vk-collapse">
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue';
import type { NameType } from './types';
import { CollapseContentKey } from './types';

defineOptions({
    name: 'cjlCollapse'
})
const activeNames = ref<NameType[]>([])
const handleItemClick = (item: NameType) => {
    const index = activeNames.value.indexOf(item)
    if (index > -1) {
        // 存在，删除数组对应的一项
        activeNames.value.splice(index, 1)
    } else {
        // 不存在，插入对应的name
        activeNames.value.push(item)
    }
}
provide(CollapseContentKey, {
    activeNames,
    handleItemClick
})
</script>

<style scoped>

</style>