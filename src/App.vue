<script setup lang="ts">
import { ref, onMounted } from 'vue'
// 引入button组件
import Button from './components/Button/Button.vue'
import type { ButtonInstance } from './components/Button/types'
// 引入collapse组件
import Collapse from '././components/Collapse/Collapse.vue'
import Item from '././components/Collapse/CollapseItem.vue'
// 引入Icon组件
import Icon from './components/Icon/Icon.vue'
const buttonRef = ref<ButtonInstance | null>(null)

const openedValue = ref(['a'])
onMounted(() => {
  if (buttonRef.value) {
    console.log('buttonRef', buttonRef.value.ref)
  }
})
</script>

<template>
  <Icon icon="user-secret" type="danger" color="pink"/>
  <Icon icon="truck" />
  <main>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br/><br/>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br/><br/>
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br/><br/>
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="arrow-up">Icon</Button><br/><br/>    

    <Collapse v-model="openedValue" according>
      <Item name="a">
        <template #title>
          <h1>nice title</h1>
        </template>
        <h1>headline title</h1>
        <div>this is content a aaa</div>
      </Item>
      <Item name="b" title="nice title b item b">
        <div>this is bbbbb test</div>
      </Item>
      <Item name="c" title="nice cccc" disabled>
        <div>this is cccc test</div>
      </Item>
    </Collapse>
    {{ openedValue }}
  </main>
</template>

<style>

</style>

