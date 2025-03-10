import type { InjectionKey, Ref } from "vue";
export type NameType = string | number

export interface CollapseProps {
    modelValue: NameType[];
    accordion?: boolean;
}

export interface CollapseItemProps {
    name: NameType;
    title?: string;
    disabled?: boolean;
}

export interface CollapseContent {
    activeNames: Ref<NameType[]>;
    handleItemClick: (name: NameType) => void;
}

export interface CollapseEmits {
    (e: 'update: modelValue', values: NameType[]): void;
    (e: 'change', values: NameType[]): void;
}
export const CollapseContentKey: InjectionKey<CollapseContent> = Symbol('collapseContextKey')