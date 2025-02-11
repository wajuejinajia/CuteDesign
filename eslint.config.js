import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from 'eslint-plugin-vue';
import { vueTsConfigs, defineConfigWithVueTs } from '@vue/eslint-config-typescript'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  ...defineConfigWithVueTs(vueTsConfigs.recommended),
  {
    // 添加自定义规则
    rules: {
      // 示例规则：使用分号结尾
      'semi': 0
    },
  }
];
