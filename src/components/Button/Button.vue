<template>
    <button
    class="vk-button"
    :class="{
        [`vk-button--${type}`]: type,
        [`vk-button--${size}`]: size,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
    }"
    :disabled="disabled"
    >
        <span>
            <slot />
        </span>
    </button>
</template>

<script lang="ts">
// 设置个人组件的个性化名称 需要单独写一个script来设置组件的属性
import { defineComponent} from 'vue';

export default defineComponent({
    name: 'cjlButton'
})
</script>

<script setup lang="ts">
import type { ButtonProps } from './types';

defineProps<ButtonProps>()
</script>

<style scoped>

</style>