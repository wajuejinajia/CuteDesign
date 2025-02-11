// import { PropType } from "vue";

// button组件的类型和大小
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'small'

// button组件对应的类型约束
export interface ButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    plain?: boolean;
    round?: boolean;
    circle?: boolean;
    disabled?: boolean;
}

// 和上面表示方法一样，按照自己喜欢的方式定义类型约束 element-plus用的就是这种方法
// export const buttonProps = {
//     type: {
//         type: String as PropType<ButtonType>
//     },
//     size: {
//         type: String as PropType<ButtonSize>
//     },
//     plain: {
//         type: Boolean
//     },
//     round: {
//         type: Boolean
//     },
//     circle: {
//         type: Boolean
//     },
//     disabled: {
//         type: Boolean
//     },

// }