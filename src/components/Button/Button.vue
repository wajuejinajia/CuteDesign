<template>
    <button
    ref="_ref"
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
    :autofocus="autofocus"
    :type="nativeType"
    >
        <span>
            <slot />
        </span>
    </button>
</template>

<!-- <script lang="ts">
// 设置个人组件的个性化名称 需要单独写一个script来设置组件的属性
import { defineComponent} from 'vue';

export default defineComponent({
    name: 'cjlButton'
})
</script> -->

<script setup lang="ts">
import { ref } from 'vue';
import type { ButtonProps } from './types';
// import  { buttonProps } from './types';

// 引入插件vuemarcos之后就可以直接在defineOptions中定义组件的属性，而不用重新写一个script
defineOptions({
    name: "cjlButton"
})

withDefaults(defineProps<ButtonProps>(), {
    nativeType: 'button'
})

const _ref = ref<HTMLButtonElement>()

defineExpose({
    ref: _ref
})

</script>

<style scoped>

</style>