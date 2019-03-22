import { Component, Vue, Prop } from 'vue-property-decorator';
import * as jquery from 'jquery';
import BaseVueSemantic from '../base_vue_semantic';
import template from './dropdown.vue';

declare const $: any;
@Component({
    mixins: [template]
})
export default class Dropdown extends BaseVueSemantic {
    @Prop() private multiple!: boolean;

    @Prop() private on!: string;

    @Prop() private clearable!: boolean;

    @Prop() private direction!: boolean;

    @Prop() private keepOnScreen!: boolean;

    @Prop() private placeholder!: string;

    @Prop() private action!: string;

    @Prop() private allowTab!: boolean;

    @Prop() private duration!: number;

    @Prop() private transition!: string;// auto (slide down / slide up)

    @Prop() private preventEmit!: boolean;

    private elProp!: {
        multiple: boolean;
        on: string;
        clearable: boolean;
        direction: boolean;
        keepOnScreen: boolean;
        placeholder: string;
        action: string;
        allowTab: boolean;
        duration: number;
        transition: string;
        preventEmit: boolean;
    }

    private checkbox: any;

    data() {
        const self = this;
        return {
            elProp: {
                multiple: this.parseBool(this.multiple || false),
                on: this.on || 'click',
                clearable: this.parseBool(this.clearable || false),
                direction: this.direction || 'auto',
                keepOnScreen: this.parseBool(this.preventEmit || true),
                placeholder: this.placeholder || '',
                action: this.action || 'activate',
                allowTab: this.parseBool(this.allowTab || true),
                duration: this.duration || 200,
                transition: this.transition || 'auto',
                preventEmit: this.parseBool(this.preventEmit || false)
            }
        };
    }

    mounted() {
        const self = this;
        $(this.$refs.el).dropdown({
            on: self.elProp.on,
            clearable: self.elProp.clearable,
            direction: self.elProp.direction,
            keepOnScreen: self.elProp.keepOnScreen,
            context: window,
            placeholder: self.elProp.placeholder,
            action: self.elProp.action,
            onChange: (value: any, text: any, $choice: any) => {
                if (self.elProp.preventEmit) return;
                self.$emit('onChange', {
                    value,
                    text,
                    $choice
                });
            },
            onShow: () => {
                if (self.elProp.preventEmit) return;
                self.$emit('onShow');
            },
            onHide: () => {
                if (self.elProp.preventEmit) return;
                self.$emit('onHide');
            }
        });
    }

    setSelected(value: string | number | Array<any>) {
        // Run only set data-value for dropdown items
        $(this.$refs.el).dropdown('set selected', value);
    }

    removeSelected(value: string | number | Array<any>) {
        // Run only set data-value for dropdown items
        // Support multiple dropdown only
        $(this.$refs.el).dropdown('remove selected', value);
    }

    setExactly(value: string | number | Array<any>) {
        // Run only set data-value for dropdown items
        // Support multiple dropdown only
        $(this.$refs.el).dropdown('set exactly', value);
    }

    getItem(value: string | number | Array<any>) {
        // Run only set data-value for dropdown items
        // Support multiple dropdown only
        $(this.$refs.el).dropdown('get item', value);
    }

    getValue() {
        return $(this.$refs.el).dropdown('get value');
    }

    show() {
        $(this.$refs.el).dropdown('show');
    }

    hide() {
        $(this.$refs.el).dropdown('hide');
    }

    toggle() {
        $(this.$refs.el).dropdown('toggle');
    }

    clear() {
        $(this.$refs.el).dropdown('clear');
    }

    isHidden() {
        return $(this.$refs.el).dropdown('is hidden');
    }
}
