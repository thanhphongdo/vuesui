import { Component, Vue, Prop } from 'vue-property-decorator';
import * as jquery from 'jquery';
import BaseVue from '../base_vue';
import template from './checkbox.vue';

declare const $: JQueryStatic;
@Component({
    mixins: [template]
})
export default class Checkbox extends BaseVue {
    @Prop() private value!: any;

    @Prop() private name!: string;

    @Prop() private label!: string;

    @Prop() private val!: any;

    @Prop() private radio!: boolean;

    @Prop() private checked!: boolean;

    private elProp!: {
        activeIndex: number;
        name: string;
        label: string;
        val: string;
        radio: boolean;
        checked: boolean;
    }

    data() {
        const self = this;
        return {
            elProp: {
                name: this.name,
                label: this.label,
                val: this.val,
                radio: this.parseBool(this.radio || false),
                checked: this.parseBool(this.checked || false)
            }
        };
    }

    mounted() {
    }

    check(event: any) {
        if (!this.elProp.radio) {
            this.$emit('input', event.target.checked);
        } else {
            this.$emit('input', this.elProp.val);
        }
    }

    delete() {
        $(this.$refs.el).remove();
    }
}
