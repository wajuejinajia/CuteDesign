<template>
    <div 
    class="vk-collapse-item"
    :class="{
        'is-disabled': disabled
    }"
    >
        <div class="vk-collapse-item__header" :id="`item-header-${name}`" @click="handleClick">
            <slot name="title">{{ title }}</slot>
        </div>
        <div class="vk-collapse-item__content" :id="`item-content-${name}`" v-show="isActive">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue';
import type {CollapseItemProps} from './types'
import { CollapseContentKey } from './types';

defineOptions({
    name: "cjlCollapseItem"
})
const props = defineProps<CollapseItemProps>()
const collapseContext = inject(CollapseContentKey)
const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))
const handleClick = () => {
    if (props.disabled) {return}
    collapseContext?.handleItemClick(props.name)
}
</script>

<style scoped>

</style>