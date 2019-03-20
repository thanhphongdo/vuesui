import { Component, Vue, Prop } from 'vue-property-decorator';
import * as jquery from 'jquery';
import BaseVueSemantic from '../base_vue_semantic';
import template from './dropdown.vue';

declare const $: any;
@Component({
    mixins: [template]
})
export default class Dropdown extends BaseVueSemantic {
    @Prop() private on!: string;

    @Prop() private clearable!: boolean;

    @Prop() private direction!: boolean;

    @Prop() private keepOnScreen!: boolean;

    @Prop() private preventEmit!: boolean;

    private elProp!: {
        on: string;
        clearable: boolean;
        direction: boolean;
        keepOnScreen: boolean;
        preventEmit: boolean;
    }

    private checkbox: any;

    data() {
        const self = this;
        return {
            elProp: {
                on: this.on || 'click',
                clearable: this.parseBool(this.clearable || false),
                direction: this.direction || 'auto',
                keepOnScreen: this.parseBool(this.preventEmit || true),
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
            onChange: (value: any, text: any, $choice: any) => {
                self.$emit('onChange', {
                    value,
                    text,
                    $choice
                });
            },
            onShow: () => {
                self.$emit('onShow');
            },
            onHide: () => {
                self.$emit('onHide');
            }
        });
    }
}
